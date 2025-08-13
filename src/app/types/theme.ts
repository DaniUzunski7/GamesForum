import { userComment } from "./comment";

export interface Theme {
    title: string,
    gameTitle: string,
    content: string,
    createdAt: Date,
    likes: number,
    liked: boolean,
    comments: userComment[],
    owner: string
}