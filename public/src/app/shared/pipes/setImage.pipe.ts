import { Pipe, PipeTransform } from '@angular/core';
import { EstateType } from 'src/app/data/enums/estate-type.enum';

const houseDefaultImage: string = '../../../../../assets/images/house.jpg';
const apartmentDefaultImage: string = '../../../../../assets/images/apartment.jpg';

@Pipe({
  name: 'setImage'
})
export class setImagePipe implements PipeTransform {
  transform(pictures: string[], type: EstateType): any {
    if (pictures && pictures.length > 0) return pictures.shift();
    
    if (type === 9) return houseDefaultImage;
    return apartmentDefaultImage;
  }
}