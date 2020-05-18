import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactListComponent, 
    ContactCreateComponent, 
    ContactUpdateComponent, 
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
