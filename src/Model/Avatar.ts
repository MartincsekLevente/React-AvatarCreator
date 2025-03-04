export enum Gender {
    MALE = "Male",
    FEMALE = "Female"
}

export interface AvatarParams {
    id: string,
    avatarImage: string,
    username: string,
    email: string,
    password: string,
    age: number,
    gender: Gender
}