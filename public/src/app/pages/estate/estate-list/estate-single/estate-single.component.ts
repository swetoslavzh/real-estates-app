import { Component, OnInit, Input } from '@angular/core';
import { Estate } from 'src/app/data/models/estate.model';
import { EstateType } from 'src/app/data/enums/estate-type.enum';
import { Currency } from 'src/app/data/enums/currency.enum';

@Component({
  selector: 'app-estate-single',
  templateUrl: './estate-single.component.html',
  styleUrls: ['./estate-single.component.scss']
})
export class EstateSingleComponent implements OnInit {

  @Input()
  public estate: Estate; 

  // Enums
  public estateTypeEnum = EstateType;
  public currencyEnum = Currency;

  constructor() { }

  ngOnInit() {
  }
}
