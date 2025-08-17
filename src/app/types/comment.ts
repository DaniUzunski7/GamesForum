export interface userComment {
    content: string,
    likes: number,
    author: string,
    likedBy: string[],
    createdAt: Date,
}