import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UploadedFile } from '@core/models/uploadFile';
import * as signalR from "@microsoft/signalr"
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
  constructor(private http: HttpClient) {
    
  }
  searchFilesByYearAndVersion(formData:FormData):Observable<UploadedFile[]> {
    return this.http.post<UploadedFile[]>('/api/VehicleProd/SearchFilesByYearAndVersion',formData);
  }
}
