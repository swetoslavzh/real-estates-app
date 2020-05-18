import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Currency } from '../../../data/enums/currency.enum';
import { Observable } from 'rxjs';
import { City } from 'src/app/data/models/city.model';
import { Region } from 'src/app/data/models/region.model';
import { LocationsService } from 'src/app/data/services/locations.service';
import { EstateType } from 'src/app/data/enums/estate-type.enum';
import { Features } from '../../../data/enums/features.enum';
import { Estate } from 'src/app/data/models/estate.model';
import { EstateService } from 'src/app/data/services/estate.service';
import { Floor } from 'src/app/data/enums/floor.enum';
import { Status } from 'src/app/data/enums/status.enum';
import { ConstructionType } from 'src/app/data/enums/construction-type.enum';
import { Condition } from 'src/app/data/enums/condition.enum';
import { UploadService } from 'src/app/data/services/upload.service';

@Component({
  selector: 'app-estate-create',
  templateUrl: './estate-create.component.html',
  styleUrls: ['./estate-create.component.scss']
})
export class EstateCreateComponent implements OnInit {

  // Enums
  public currencyEnum = Currency;
  public estateTypeEnum = EstateType;
  public floorEnum = Floor;
  public statusEnum = Status;
  public constructionTypeEnum = ConstructionType;
  public conditionEnum = Condition;

  public estateForm: FormGroup;

  public cities$: Observable<City[]>;
  public regions$: Observable<Region[]>;
  public FeaturesTemplate = Features;
  public featureOptions = [];
  public files: any[] = [];

  constructor(
    private fb: FormBuilder,
    private locationsService: LocationsService,
    private estateService: EstateService,
    private uploadService: UploadService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createFeaturesOptions();
    this.estateForm = this.fb.group({
      name: ['', Validators.required],
      city: [null, Validators.required],
      region: [null, Validators.required],
      floor: [null, [Validators.min(0)]],
      price: [null, Validators.required],
      currency: [null, Validators.required],
      picturesUrls: [null],
      type: [null, Validators.required],
      sellerName: [null],
      status: [null],
      estateCreationTime: [null],
      constructionType: [null],
      condition: [null],
      phoneNumber: [null, Validators.required],
      areaSq: [null, [Validators.min(1)]],
      features: [null],
      additionalInfo: [null],
      // subtype: [null, Validators.required],
      // hasLift: [null, Validators.required],
      // isLastFloor: [null, Validators.required],
      // isFurnished: [null, Validators.required],
      // isTransitional: [null, Validators.required],
      // exposure: [null, Validators.required],
      // hasParkingPlace: [null, Validators.required],
      // yearOfConstruction: [null, Validators.required],
      // construction: [null, Validators.required],
      // pricePerSq: [null, Validators.required],
      // areaSq: [null, Validators.required],
      // heating: [null, Validators.required],
      // numberOfTerraces: [null, Validators.required]
    });

    this.cities$ = this.locationsService.getLocations();
  }

  public onSubmit() {
    const selectedFeatures = this.getSelectedFeatures();
    let estate: Estate = this.estateForm.value;
    estate.features = selectedFeatures;
    
    const estateCreationTime = new Date(estate.estateCreationTime);
    if (!estateCreationTime.getTime()) estate.estateCreationTime = null;

    this.estateService.createEstate(estate)
      .subscribe((res: any) => {
        const estate: Estate = res.estate;
        // this.router.navigateByUrl('/estates');

        if (this.files.length) {
          let imageData = new FormData();

          this.files.forEach(file => {
            // imageData.append('files', file.rawFile);
            this.uploadService.upload(file, estate._id)
              .subscribe((res) => console.log('file uploaded', res));
          });

          this.router.navigateByUrl('/estates')
          // this.uploadService.upload(this.files, estate._id)
          //   .subscribe(data => {
          //   }, error => {
          //     console.log(error);
          //   }, () => this.router.navigateByUrl('/estates'));
        } else {
          this.router.navigateByUrl('/estates');
        }
      })
  }

  public setRegion(eventValue): void {
    if (!eventValue.value) return;
    const curentCity: Region = this.estateForm.get('city').value;
    const curentCityId: number = curentCity.id;
    this.regions$ = this.locationsService.getRegions(curentCityId);
  }

  public createFeaturesOptions(): void {
    const featuresKeysAndValues = Object.keys(Features);
    const featuresKeys = featuresKeysAndValues.slice(0, featuresKeysAndValues.length / 2);
    featuresKeys.map(featureKey => {
      this.featureOptions.push({
        key: featureKey,
        value: Features[ featureKey ],
        isChecked: false
      });
    })
  }

  public onFileUpload(files) {
    this.files.push(files);
  }
  
  public onDeleteFiles() {
    this.files = [];
  }

  private getSelectedFeatures(): number[] {
    const selected = this.featureOptions.filter(feature => feature.isChecked);
    return selected.map(feature => Number(feature.key));
  }
}
