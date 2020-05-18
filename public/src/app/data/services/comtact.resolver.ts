import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactService } from './contact.service';

@Injectable({ providedIn: 'root' })
export class ContactResolver implements Resolve<Contact> {
  constructor(
    private contactService: ContactService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const contactId: string = route.params.id;
    return this.contactService.getContact(contactId);
  }
}