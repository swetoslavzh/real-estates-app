import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { apiUrls } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(apiUrls.contacts);
  }
  
  public createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(apiUrls.contactCreate, contact);
  }

  public getContact(id: string): Observable<Contact> {
    return this.http.get<Contact>(apiUrls.contactDetails + id);
  }

  public updateContact(contact: Contact, id: string): Observable<Contact> {
    return this.http.put<Contact>(apiUrls.contactsUpdate + id, contact);
  }
  
  public deleteContact(id: string): Observable<Contact> {
    return this.http.delete<Contact>(apiUrls.contactsDelete + id);
  }
}