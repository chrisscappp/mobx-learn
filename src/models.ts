export type CastError = { status: number | string, data: object, message: string };

export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}