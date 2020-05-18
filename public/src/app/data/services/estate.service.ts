import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '../constants/constants';
import { Observable } from 'rxjs';
import { Estate } from '../models/estate.model';

@Injectable({
  providedIn: 'root'
})
export class EstateService {
  constructor(private http: HttpClient) {}

  public getEstates(pageIndex?: number, pageSize?: number): Observable<Estate[]> {
    const startIndex = pageIndex || 0;
    const size = pageSize || 9;

    return this.http.get<Estate[]>(apiUrls.estates);
  }

  public getEstate(id: string): Observable<Estate> {
    return this.http.get<Estate>(apiUrls.estateDetails + id);
  }

  public createEstate(estate: Estate): Observable<Estate> {
    return this.http.post<Estate>(apiUrls.estateCreate, estate);
  }

  public updateEstate(estate: Estate, id: string): Observable<Estate> {
    return this.http.put<Estate>(apiUrls.estateUpdate + id, estate);
  }
  
  public deleteEstate(id: string): Observable<Estate> {
    return this.http.delete<Estate>(apiUrls.estateDelete + id);
  }
}