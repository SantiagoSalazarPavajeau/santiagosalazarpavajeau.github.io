import React from 'react';

export interface Post{
    type_of?: string;
    id?: number; 
    title: string;
    description: string;
    readable_publish_date: string;
    slug?: string;
    path?: string;
    url?: string;
    comments_count?: number;
    public_reactions_count?: number;
    collection_id?: any;
    published_timestamp?: Date;
    positive_reactions_count?: number;
    cover_image?: any;
    social_image?: string;
    canonical_url?: string;
    created_at?: Date;
    edited_at?: Date;
    crossposted_at?: any;
    published_at?: Date;
    last_comment_at?: Date;
    tag_list?: Array<string>;
    tags?: string;
    user?: object;
}


export const PostCard = ({title, description, readable_publish_date, url}: Post) => {
    return (
        <>

            <a href={url}>
            <div className="post">
                <h2>{title}</h2>
                <h3>{readable_publish_date}</h3>
                <p>{description}</p>
            </div>  
            </a>        
        </>
    )
} 