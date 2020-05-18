import { City } from './city.model';
import { Region } from './region.model';
import { ContactType } from '../enums/contact-type.enum';

export interface Contact {
  fullName: string;
  phoneNumber: string;
  city: City;
  region: Region;
  type: ContactType;
  budget?: number;
  additionalInfo: string;
  creationDate?: string;
}