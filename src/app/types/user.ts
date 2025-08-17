export interface UserForAuth {
    username: string;
    name: string;
    phone: string;
    email: string;
    id: string;
    password?: string;
    createdAt: Date;
    rePass?: string
}