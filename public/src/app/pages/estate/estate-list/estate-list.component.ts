import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Estate } from 'src/app/data/models/estate.model';
import { EstateService } from 'src/app/data/services/estate.service';

@Component({
  selector: 'app-estate-list',
  templateUrl: './estate-list.component.html',
  styleUrls: ['./estate-list.component.scss']
})
export class EstateListComponent implements OnInit {

  public estates$: Observable<Estate[]>;

  constructor(
    private estateService: EstateService
  ) { }

  ngOnInit() {
    this.estates$ = this.estateService.getEstates();
  }
}
