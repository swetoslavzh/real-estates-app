import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/data/models/contact.model';
import { ContactService } from 'src/app/data/services/contact.service';
import { ContactType } from 'src/app/data/enums/contact-type.enum';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  //Enums
  public contactType = ContactType;

  public contacts: Contact[];
  public displayedColumns: string[] = ['name', 'type', 'phoneNumber', 'city', 'region', 'budget'];
  public dataSource = [];

  constructor(
    private contactService: ContactService
  ) { }

  public ngOnInit() {
    this.contactService.getAllContacts()
      .subscribe(contacts => this.populateDataSource(contacts));
  }

  public populateDataSource(contacts: Contact[]) {
    contacts.forEach((contact: Contact) => {
      const row = {
        'name': contact.fullName, 
        'type': this.contactType[contact.type], 
        'phoneNumber': contact.phoneNumber, 
        'city': contact.city.name, 
        'region': contact.region.name, 
        'budget': contact.budget
      };
      this.dataSource.push(row);
    });
  }
}
