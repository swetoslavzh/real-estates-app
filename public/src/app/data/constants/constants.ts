import { environment } from 'src/environments/environment'

export const baseUrl: string = `http://localhost:${environment.apiUrl}`;

export enum apiUrls {
  'estates' = '/estates',
  'estateCreate' = '/estates/create',
  'estateDetails' = '/estates/', // :GET /:id
  'estateDelete' = '/estates/', // :DELETE /:id
  'estateUpdate' = '/estates/', // :PUT /:id
  'contacts' = '/contacts',
  'contactCreate' = '/contacts/create',
  'contactDetails' = '/contacts/',  // :GET /:id
  'contactsDelete' = '/contacts/', // :DELETE /:id
  'contactsUpdate' = '/contacts/', // :PUT /:id
  'cities' = '/locations/cities',
  'regions' = '/locations/regions?cityId=', // :GET /:id
  'upload' = '/upload'
}