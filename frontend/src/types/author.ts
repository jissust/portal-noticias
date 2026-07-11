export interface AuthorType {
    id: number,
    name: string,
    email?: string,
    description?: string,
    instagram?: string,
    twitter?: string,
    youtube?: string,
    facebook?: string,
    tiktok?: string,
    linkedin?: string,
    image?:{
        url: string
    }
}