export interface AuthorType {
    id: number,
    name: string,
    email?: string,
    description?: string,
    Instagram?: string,
    Twitter?: string,
    Youtube?: string
    image?:{
        url: string
    }
}