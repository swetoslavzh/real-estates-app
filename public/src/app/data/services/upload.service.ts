import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '../constants/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient) { }
  
  upload(images: any, estateId: string): Observable<any> {
    return this.http.post<any>(`${apiUrls.upload}/${estateId}`, images)
  }

  delete(image: string): Observable<any> {
    return this.http.delete<any>(`${apiUrls.upload}/name/${image}`);
  }
}