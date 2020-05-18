export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: number;
  agencyName?: string;
  agencyPhoneNumber?: number;
}