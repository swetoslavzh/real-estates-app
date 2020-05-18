import { City } from './city.model';
import { Region } from './region.model';
import { ContactType } from '../enums/contact-type.enum';

export interface Contact {
  fullName: string;
  phoneNumber: string;
  city: City;
  type: ContactType;
  region: Region;
  budget?: number;
  additionalInfo: string;
  creationDate: Date;
}