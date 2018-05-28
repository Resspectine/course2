import { RegisterUserInfo, UserServiceErrorCodes } from './User.models';
import { injectable } from 'inversify';
import { UserEntity } from '../DbEntities/User';
import { UserRoleEntity } from '../DbEntities/UserRole';

export const UserValidatorToken = Symbol.for('UserValidator');

@injectable()
export class UserValidator {

    constructor() {}

    public async validateUserInfo(userInfo: RegisterUserInfo): Promise<void> {
        if (!userInfo.fullname) {
            throw new Error(UserServiceErrorCodes.FullnameNotSupplied);
        }
        if (userInfo.password !== userInfo.passwordRepeat) {
            throw new Error(UserServiceErrorCodes.PasswordsAreDifferent);
        }
        if (await UserEntity.find({
            where: { username: userInfo.username }
            })) {
            throw new Error(UserServiceErrorCodes.UsernameAlreadyTaken);
        }
        if (await UserEntity.find({
            where: { email: userInfo.email }
            })) {
            throw new Error(UserServiceErrorCodes.UsernameAlreadyTaken);
        }
        if (!await UserRoleEntity.findById(userInfo.roleId)) {
            throw new Error(UserServiceErrorCodes.InvalidRoleId);
        }
    }
}