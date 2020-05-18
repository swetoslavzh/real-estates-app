import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from 'src/app/data/models/city.model';
import { LocationsService } from 'src/app/data/services/locations.service';
import { Region } from 'src/app/data/models/region.model';
import { ContactService } from 'src/app/data/services/contact.service';
import { ContactType } from 'src/app/data/enums/contact-type.enum';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {

  // Enums
  public contactTypeEnum = ContactType;

  public contactForm: FormGroup;
  public cities$: Observable<City[]>;
  public regions$: Observable<Region[]>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private locationsService: LocationsService,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      type: ['', Validators.required],
      city: ['', Validators.required],
      region: ['', Validators.required],
      budget: ['', Validators.min(1)],
      additionalInfo: ['', Validators.required]
    });

    this.cities$ = this.locationsService.getLocations();
  }

  public setRegion(eventValue): void {
    if (!eventValue.value) return;
    const curentCity: Region = this.contactForm.get('city').value;
    const curentCityId: number = curentCity.id;
    this.regions$ = this.locationsService.getRegions(curentCityId);
  }

  public onSubmit(): void {
    if (this.contactForm.invalid) return;
    this.contactService.createContact(this.contactForm.value)
      .subscribe(_contact => {
        this.router.navigateByUrl('/contacts');
      })
  }
}
