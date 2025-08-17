export interface UserComment {
    content: string,
    author: string,
    likedBy: string[],
    createdAt: Date,
}