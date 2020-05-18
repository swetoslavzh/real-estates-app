import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '../constants/constants';
import { City } from '../models/city.model';
import { Observable } from 'rxjs';
import { Region } from '../models/region.model';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  public getLocations(): Observable<City[]> {
    return this.http.get<City[]>(apiUrls.cities);
  }

  public getRegions(locationId: number): Observable<Region[]> {
    return this.http.get<Region[]>(apiUrls.regions + locationId);
  }
}