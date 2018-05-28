export enum UserServiceErrorCodes {
    UsernameAlreadyTaken = 'usec0001',
    EmailAlreadyTaken = 'usec0002',
    PasswordsAreDifferent = 'usec0003',
    FullnameNotSupplied = 'usec0004',
    InvalidRoleId = 'usec0005'
}

export interface UserCredentials {
    username: string;
    password: string;
}

export interface RegisterUserInfo {
    username: string;
    password: string;
    passwordRepeat: string;
    email: string;
    fullname: string;
    roleId: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    fullname: string;
    password: string;
    confirmed: boolean;
}