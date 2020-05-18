import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../../../data/models/contact.model';
import { City } from '../../../data/models/city.model';
import { Region } from '../../../data/models/region.model';
import { ContactType } from '../../../data/enums/contact-type.enum';
import { LocationsService } from '../../../data/services/locations.service';
import { ContactService } from '../../../data/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.scss']
})
export class ContactUpdateComponent implements OnInit {

  // Enums
  public contactTypeEnum = ContactType;
 
  public contactForm: FormGroup;
  public contact: Contact;

  public cities: City[] = [];
  public regions: Region[] = [];

  constructor(
    private fb: FormBuilder,
    private locationsService: LocationsService,
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.contact = this.route.snapshot.data.contact;
    this.contactForm = this.fb.group({
      city: [ this.contact.city.id, Validators.required],
      region: [this.contact.region.id, Validators.required],
      fullName: [this.contact.fullName, Validators.required],
      phoneNumber: [this.contact.phoneNumber, Validators.required],
      type: [this.contact.type, Validators.required],
      budget: [this.contact.budget, Validators.min(1)],
      additionalInfo: [this.contact.additionalInfo, Validators.required]
    });
    this.setLocations();
  }

  public setLocations(): void {
    this.locationsService.getLocations().subscribe(cities => this.cities = cities);
    this.locationsService.getRegions(this.contact.city.id).subscribe(regions => {
      this.regions = regions;
      this.setRegion(this.contactForm);
    });
  }

  public onSubmit() {
    let contact = this.contactForm.value;
    contact.city = this.cities.find(city => city.id === contact.city);
    contact.region = this.regions.find(region => region.id === contact.region);

    this.contactService.updateContact(contact, this.contact._id)
      .subscribe((res: any) => {
        const contact: Contact = res.contact;
        this.router.navigateByUrl('/contacts');
      });
  }

  public setRegion(eventValue): void {
    if (!eventValue.value) return;
    const curentCity: Region = this.contactForm.get('city').value;
    const curentCityId: number = Number(curentCity);
    this.locationsService.getRegions(curentCityId).subscribe(regions => this.regions = regions);
  }
} 