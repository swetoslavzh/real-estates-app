import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estate } from 'src/app/data/models/estate.model';
import { NgxGalleryOptions, NgxGalleryImage } from '@kolkov/ngx-gallery';
import { EstateType } from 'src/app/data/enums/estate-type.enum';
import { Floor } from 'src/app/data/enums/floor.enum';
import { Features } from 'src/app/data/enums/features.enum';
import { Currency } from 'src/app/data/enums/currency.enum';
import { Condition } from 'src/app/data/enums/condition.enum';
import { ConstructionType } from 'src/app/data/enums/construction-type.enum';
import { Status } from 'src/app/data/enums/status.enum';
import { EstateService } from 'src/app/data/services/estate.service';

@Component({
  selector: 'app-estate-details',
  templateUrl: './estate-details.component.html',
  styleUrls: ['./estate-details.component.scss']
})
export class EstateDetailsComponent implements OnInit {

  public estate: Estate;
  public user;

  // Enums
  public estateTypeEnum = EstateType;
  public floorEnum = Floor;
  public featuresEnum = Features;
  public currencyEnum = Currency;
  public conditionEnum = Condition;
  public constructionTypeEnum = ConstructionType;
  public statusEnum = Status;


  public displayedColumns: string[] = ['key', 'value'];
  public dataSource = [];

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estateService: EstateService
  ) { }

  ngOnInit() {
    this.estate = this.route.snapshot.data.estate;
    this.setDataSoureInfo(this.estate);
    
    // this.user = {
    //   firstName: 'Светослав',
    //   lastName: 'Желязков',
    //   email: 'swetoslavj@gmail.com',
    //   phoneNumber: "0823482384",
    //   agencyName: 'ERA',
    //   agencyPhoneNumber: "0894234232"
    // }
    // this.galleryOptions = [
    //   {
    //     width: '500px',
    //     height: '400px',
    //     thumbnailsColumns: 4,
    //     imageAnimation: NgxGalleryAnimation.Slide
    //   },
    //   // max-width 800
    //   {
    //     breakpoint: 800,
    //     width: '100%',
    //     height: '600px',
    //     imagePercent: 80,
    //     thumbnailsPercent: 20,
    //     thumbnailsMargin: 20,
    //     thumbnailMargin: 20
    //   },
    //   // max-width 400
    //   {
    //     breakpoint: 400,
    //     preview: false
    //   }
    // ];
    
    // this.galleryImages = this.estate.picturesUrls.map(image => {
    //   return {
    //     small: image,
    //     medium: image,
    //     big: image
    //   }
    // })
  }

  public deleteEstate(id: string): void {
    this.estateService.deleteEstate(id)
      .subscribe(() => this.router.navigateByUrl('/estates'))
  }

  private setDataSoureInfo(estate: Estate) {
    let { 
      price, 
      sellerName, 
      phoneNumber,
      areaSq,
      additionalInfo 
    } = estate;

    let features = [];
    if (estate.features && estate.features.length > 0) {
      features.forEach(feature => features.push(this.featuresEnum[feature]));
    }
    
    let city = (estate.city) ? estate.city.name : '';
    let region = (estate.region) ? estate.region.name : '';
    let floor = this.floorEnum[estate.floor];
    let type = this.estateTypeEnum[estate.type];
    let status = this.statusEnum[estate.status];
    let estateCreationTime = new Date(estate.estateCreationTime).toLocaleDateString();
    let constructionType = this.constructionTypeEnum[estate.constructionType];
    let condition = this.conditionEnum[estate.condition];

    const data = [
      { 'key':'Заглавие на обявата', 'value': name },
      { 'key':'Вид на имота', 'value': type },
      { 'key':'Цена', 'value': price },
      { 'key':'Състояние', 'value': condition },
      { 'key':'Местоположение', 'value': city },
      { 'key':'Район', 'value': region },
      { 'key':'Тип строителство', 'value': constructionType },
      { 'key':'Етаж', 'value': floor },
      { 'key':'Квадратура', 'value': areaSq },
      { 'key':'статус', 'value': status },
      { 'key':'Име на продавача', 'value': sellerName },
      { 'key':'Телефон на продавача', 'value': phoneNumber },
      { 'key':'Дата на създаване на обявата', 'value': estateCreationTime },
      { 'key':'Допълнителна информация', 'value': additionalInfo },
      { 'key':'Особоености', 'value': features.join(', ') }
    ];

    data.forEach(d => {
      if (d.value) this.dataSource.push(d);
    });
  }
}