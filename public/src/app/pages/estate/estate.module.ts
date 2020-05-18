import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstateCreateComponent } from './estate-create/estate-create.component';
import { EstateListComponent } from './estate-list/estate-list.component';
import { EstateSingleComponent } from './estate-list/estate-single/estate-single.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EstateDetailsComponent } from './estate-details/estate-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { EstateUpdateComponent } from './estate-update/estate-update.component';
@NgModule({
  declarations: [
    EstateCreateComponent,
    EstateListComponent,
    EstateSingleComponent,
    EstateDetailsComponent,
    EstateUpdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxGalleryModule
  ]
})
export class EstateModule { }
