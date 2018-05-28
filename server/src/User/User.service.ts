import { inject, injectable } from 'inversify';
import { UserValidator, UserValidatorToken } from './User.validator';
import { RegisterUserInfo, User, UserCredentials } from './User.models';
import { UserEntity } from '../DbEntities/User';
import passwordHash from 'password-hash-and-salt';
import { GlobalExceptionCodes } from '../Globals/ExceptionCodes';

export const UserServiceToken = Symbol.for('UserService');

@injectable()
export class UserService {
    public constructor(
        @inject(UserValidatorToken) private userValidator: UserValidator
    ) {}

    public async getUserByCreds(creds: UserCredentials): Promise<User | null> {
        const userByUsername = await UserEntity.find({
            where: { username: creds.username }
        }) as User;
        if (await this.validatePasswordHash(creds.password, userByUsername.password)) {
            return userByUsername;
        } else {
            throw new Error(GlobalExceptionCodes.WrongCredentialsException);
        }
    }

    public async createUserFromUserInfo(userInfo: RegisterUserInfo): Promise<User> {
        await this.userValidator.validateUserInfo(userInfo);
        try {
            const user = await UserEntity.create({
                username: userInfo.username,
                email: userInfo.email,
                password: await this.hashPassword(userInfo.password),
                fullname: userInfo.fullname,
                confirmed: false,
                registeredAt: new Date(),
                roleId: userInfo.roleId
            }, { logging: true });
            return user as any;

        } catch (error) {
            console.log(JSON.stringify(error));
        }


        // todo send email confirmation

    }

    private hashPassword(password: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            passwordHash(password).hash((error: string, hash: string) => {
                if (error) {
                    reject(error);
                }
                resolve(hash);
            });
        });
    }

    private validatePasswordHash(password: string, passHash: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
           passwordHash(password).verifyAgainst(passHash, (error: string, verified: boolean) => {
               if (error) {
                   throw new Error(error);
               }
               resolve(verified);
           });
        });
    }
}