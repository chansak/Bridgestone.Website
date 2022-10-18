import { Version } from "@fuse/version";

export interface UploadedFile {
    uploadFileId:string;
    fileName:string;
    statusId:number;
    year:number;
    version:number;
    statusText:string;
    isDone:boolean;
    isActive:boolean;
    createdDate:Date;
}
  