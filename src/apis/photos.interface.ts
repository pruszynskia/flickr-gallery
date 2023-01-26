export interface IBasemodel {
    id:string
}
export interface IGallery {
    photos: IPhotos;
    stat: string;
}
export interface IPhotos {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: IPhoto[];
}
export interface IPhoto extends IBasemodel{
    owner: string;
    secret: string;
    server: string;
    farm: number;
    title: string;
    ispublic: number;
    isfriend: number;
    isfamily: number;
}