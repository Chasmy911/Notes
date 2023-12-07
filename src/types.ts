export interface INote {
	title: string;
	text: string;
	date: string;
	id: number;
};

export type BaseActions<T> = {
	type: T;
};

export type BaseActionsWithPayload<T, P> = {
	type: T;
	payload: P;
};

export interface ILogInUserData {
	email: string;
	password: string;
}

