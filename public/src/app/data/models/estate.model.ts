import { Currency } from '../enums/currency.enum';
import { City } from './city.model';
import { Region } from './region.model';
import { ConstructionType } from '../enums/construction-type.enum';
import { Features } from '../enums/features.enum';
import { EstateType } from '../enums/estate-type.enum';
import { Condition } from '../enums/condition.enum';
import { Status } from '../enums/status.enum';

export interface Estate {
  _id: string,
  name: string,
  city: City,
  region: Region,
  floor: number,
  price: number,
  currency: Currency,
  type: EstateType,
  picturesUrls: string[],
  phoneNumber: string,
  areaSq: number,
  condition: Condition,
  estateCreationTime: Date,
  sellerName: string,
  constructionType: ConstructionType,
  status: Status,
  creationDate: Date
  features?: Features[],
  additionalInfo?: string
  subtype?: string,
  hasLift?: boolean,
  isLastFloor?: boolean,
  isFurnished?: boolean,
  isTransitional?: boolean,
  exposure?: string[],
  hasParkingPlace?: boolean,
  yearOfConstruction?: number,
  pricePerSq?: number,
  heating?: string,
  numberOfTerraces?: number,
}