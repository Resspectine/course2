import { Express, Response, Request } from 'express';
import { RegisterUserInfo, UserCredentials } from './User.models';
import { constants as HTTP_STATUS_CODES } from 'http2';
import { UserService, UserServiceToken } from './User.service';
import { inject, injectable } from 'inversify';
import { LolNewsController } from '../Globals/Models';

export const UserControllerToken = Symbol.for('UserController');

@injectable()
export class UserController extends LolNewsController {

    public constructor(
        @inject(UserServiceToken) private userService: UserService
    ) {
        super();
    }

    public async login(req: Request, res: Response) {
        const creds = req.body as UserCredentials;
        const user = await this.userService.getUserByCreds(creds);
        if (user) {
            res.send(user);
        } else {
            res.sendStatus(HTTP_STATUS_CODES.HTTP_STATUS_BAD_REQUEST);
        }
    }

    public async register(req: Request, res: Response) {
        const userInfo = req.body as RegisterUserInfo;
        try {
            const user = await this.userService.createUserFromUserInfo(userInfo);
            res.send(user);
        } catch (error) {
            res.status(HTTP_STATUS_CODES.HTTP_STATUS_BAD_REQUEST).send(error);
        }
    }

    public registerRoutes(app: Express): void {
        app.post(
            '/register',
            (req: Request, res: Response) => this.register(req, res)
        );
        app.post(
            '/login',
            (req: Request, res: Response) => this.login(req, res)
        );
    }
}