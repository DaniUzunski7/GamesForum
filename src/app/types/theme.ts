import { UserComment } from "./comment";

export interface Theme {
    title: string,
    gameTitle: string,
    content: string,
    createdAt: Date,
    likedBy: string[],
    comments: UserComment[],
    id: string,
    owner: string
}