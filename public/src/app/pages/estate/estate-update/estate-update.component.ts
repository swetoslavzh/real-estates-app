import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Currency } from 'src/app/data/enums/currency.enum';
import { EstateType } from 'src/app/data/enums/estate-type.enum';
import { Observable } from 'rxjs';
import { Region } from 'src/app/data/models/region.model';
import { City } from 'src/app/data/models/city.model';
import { Features } from 'src/app/data/enums/features.enum';
import { LocationsService } from 'src/app/data/services/locations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Estate } from 'src/app/data/models/estate.model';
import { EstateService } from 'src/app/data/services/estate.service';
import { UploadService } from 'src/app/data/services/upload.service';
import { Floor } from 'src/app/data/enums/floor.enum';
import { Status } from 'src/app/data/enums/status.enum';
import { ConstructionType } from 'src/app/data/enums/construction-type.enum';
import { Condition } from 'src/app/data/enums/condition.enum';

@Component({
  selector: 'app-estate-update',
  templateUrl: './estate-update.component.html',
  styleUrls: ['./estate-update.component.scss']
})
export class EstateUpdateComponent implements OnInit {

  // Enums
  public currencyEnum = Currency;
  public estateTypeEnum = EstateType;
  public floorEnum = Floor;
  public statusEnum = Status;
  public constructionTypeEnum = ConstructionType;
  public conditionEnum = Condition;

  public estateForm: FormGroup;
  public estate: Estate;

  public cities: City[] = [];
  public regions: Region[] = [];
  public FeaturesTemplate = Features;
  public featureOptions = [];
  public files: any[] = [];

  constructor(
    private fb: FormBuilder,
    private locationsService: LocationsService,
    private estateService: EstateService,
    private uploadService: UploadService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.estate = this.route.snapshot.data.estate;
    this.estateForm = this.fb.group({
      type: [this.estate.type.toString(), Validators.required],
      name: [this.estate.name, Validators.required],
      condition: [String(this.estate.condition)],
      city: [ this.estate.city.id, Validators.required],
      region: [this.estate.region.id, Validators.required],
      constructionType: [String(this.estate.constructionType)],
      floor: [String(this.estate.floor), [Validators.min(0)]],
      price: [this.estate.price, Validators.required],
      currency: [this.estate.currency.toString(), Validators.required],
      areaSq: [String(this.estate.areaSq), [Validators.min(1)]],
      status: [String(this.estate.status)],
      picturesUrls: [null],
      sellerName: [this.estate.sellerName],
      estateCreationTime: [this.estate.estateCreationTime],
      phoneNumber: [this.estate.phoneNumber, Validators.required],
      features: [null],
      additionalInfo: [this.estate.additionalInfo]
    });
    this.createFeaturesOptions();
    this.setLocations();
  }

  public setLocations(): void {
    this.locationsService.getLocations().subscribe(cities => this.cities = cities);
    this.locationsService.getRegions(this.estate.city.id).subscribe(regions => {
      this.regions = regions;
      this.setRegion(this.estateForm);
    });
  }

  public onSubmit() {
    const selectedFeatures = this.getSelectedFeatures();
    let estate = this.estateForm.value;
    estate.features = selectedFeatures;
    estate.city = this.cities.find(city => city.id === estate.city);
    estate.region = this.regions.find(region => region.id === estate.region);

    this.estateService.updateEstate(estate, this.estate._id)
      .subscribe((res: any) => {
        const estate: Estate = res.estate;
        this.router.navigateByUrl('/estates');
        // if (this.files.length) {
        //   let imageData = new FormData();

        //   this.files.forEach(file => {
        //     imageData.append('files', file.rawFile);
        //   });

        //   this.uploadService.upload(this.files, estate._id)
        //     .subscribe(data => {
        //     }, error => {
        //       console.log(error);
        //     }, () => this.router.navigateByUrl('/estates'));
        // } else {
        //   this.router.navigateByUrl('/estates');
        // }
      })
  }

  public setRegion(eventValue): void {
    if (!eventValue.value) return;
    const curentCity: Region = this.estateForm.get('city').value;
    const curentCityId: number = Number(curentCity);
    this.locationsService.getRegions(curentCityId).subscribe(regions => this.regions = regions);
  }

  public createFeaturesOptions(): void {
    const featuresKeysAndValues = Object.keys(Features);
    const featuresKeys = featuresKeysAndValues.slice(0, featuresKeysAndValues.length / 2);
    featuresKeys.map(featureKey => {
      let featureKeyNumber = Number(featureKey);
      this.featureOptions.push({
        key: featureKey,
        value: Features[ featureKey ],
        isChecked: this.estate.features.includes(featureKeyNumber)
      });
    });
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
