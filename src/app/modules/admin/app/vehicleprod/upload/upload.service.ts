import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {UploadFileInfo} from '@module/admin/app/vehicleprod/upload/upload.fileinfo';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
   
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload(formData:FormData):Observable<any> {
      return this.http.post<any>('/api/VehicleProd/UploadFiles',formData);
  }
}
