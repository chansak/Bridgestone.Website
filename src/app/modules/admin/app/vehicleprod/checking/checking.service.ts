import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CheckingService {

  constructor(private _httpClient: HttpClient) { }
  getData(id:string): Observable<any>
    {
        return this._httpClient.get('api/VehicleProd/UploadFileJobTracking?id=' + id);
    }
}
