export enum Gender {
    MALE = "Male",
    FEMALE = "Female"
}

export interface AvatarParams {
    avatarImage: string,
    username: string,
    email: string,
    password: string,
    age: number,
    gender: Gender
}