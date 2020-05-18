import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstateModule } from './estate/estate.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactCreateComponent } from './contact/contact-create/contact-create.component';
import { ContactUpdateComponent } from './contact/contact-update/contact-update.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [],
  imports: [
    EstateModule,
    ContactModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
