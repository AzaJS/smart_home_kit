// place files you want to import through the `$lib` alias in this folder.
export interface IUserCreate {
    username: string;
    email: string;
    password: string;
    is_admin: number
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface ICreateHouse {
    name: string;
    user_id: number;
}