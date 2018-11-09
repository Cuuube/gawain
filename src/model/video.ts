export interface IVideosRes {
    data: IVideo[]
    count: number
}

export interface IVideo {
    channel: string
    check_time: Date
    from_website: string
    likes: number
    media_description: string
    media_link: string
    media_name: string
    media_snapshot: string
    original_id: string
    uploader: string
    uploader_avatar: string
    uploader_space_link: string
    played_count: number
    upload_time: number
}