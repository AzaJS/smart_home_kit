import type { ModalSettings } from '@skeletonlabs/skeleton';

// place files you want to import through the `$lib` alias in this folder.
export interface IUserCreate {
	username: string;
	email: string;
	password: string;
	is_admin: number;
}

export interface IUserLogin {
	email: string;
	password: string;
}

export interface ICreateHouse {
	name: string;
	// user_id: number;
}

export interface ICreateRoom {
	name: string;
	house_id: number | string;
}

export interface ICreateDevice {
	name: string;
	type: string;
}

export interface IAttachDevice {
    room_id: number;
    house_id: number;
}

export interface IModaleSettings extends ModalSettings {
	link: string;
}
