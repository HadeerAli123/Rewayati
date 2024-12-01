import { Category } from "./category";
import { User } from "./user";
import { Tag } from "./tag";

export interface Story {
    id?: number,
    publication_status?: string,
    status?: string,
    title?: string,
    description?:string,
    language?: string,
    copyright?:string,
    cover_image?:string,
    advertisement_image?:string,
    content_type?:string,
    category?: Category,
    created_at?:Date,
    updated_at?: Date,
    user?: User,
    tags?: Tag[],
    comments?: Comment[],
}

