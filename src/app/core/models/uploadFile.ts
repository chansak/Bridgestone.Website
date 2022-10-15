import { Version } from "@fuse/version";

export interface UploadedFile {
    uploadFileId:string;
    fileName:string;
    statusId:number;
    year:number;
    version:number;
    isActive:boolean;
    createdDate:Date;
}
  