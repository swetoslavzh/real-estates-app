import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../data/models/contact.model';
import { ContactService } from '../../../data/services/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactType } from '../../../data/enums/contact-type.enum';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  public contact: Contact;
  public dataSource = [];
  public contactTypeEnum = ContactType;
  public displayedColumns: string[] = ['key', 'value'];

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.contact = this.route.snapshot.data.estate;
    this.setDataSoureInfo(this.contact);
  }
  public deleteContact(id: string): void {
    this.contactService.deleteContact(id)
      .subscribe(() => this.router.navigateByUrl('/contacts'))
  }

  private setDataSoureInfo(contact: Contact) {
    let { 
      fullName,
      phoneNumber,
      type: ContactType,
      budget,
      additionalInfo,
      creationDate,
    } = contact;
    
    let city = (contact.city) ? contact.city.name : '';
    let region = (contact.region) ? contact.region.name : '';
    let type = this.contactTypeEnum[contact.type];

    const data = [
      { 'key': 'Име', 'value': fullName},
      { 'key': 'Телефон', 'value': phoneNumber},
      { 'key': 'Местоположение', 'value': city },
      { 'key': 'Район', 'value': region },
      { 'key': 'Интерес', 'value': type },
      { 'key': 'Бюджет', 'value': budget},
      { 'key': 'Допълнителна информация', 'value': additionalInfo},
    ];

    data.forEach(d => {
      if (d.value) this.dataSource.push(d);
    });
  }
}
