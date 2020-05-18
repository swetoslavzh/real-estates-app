import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Estate } from '../models/estate.model';
import { EstateService } from './estate.service';

@Injectable({ providedIn: 'root' })
export class EstateResolver implements Resolve<Estate> {
  constructor(
    private estateService: EstateService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const estateId: string = route.params.id;
    return this.estateService.getEstate(estateId);
  }
}