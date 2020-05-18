import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material.module';
import { EnumToArrayPipe } from './pipes/enumToArray.pipe';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { setImagePipe } from './pipes/setImage.pipe';

@NgModule({
  declarations: [
    NavigationComponent,
    FileUploadComponent,
    EnumToArrayPipe,
    setImagePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FileUploadModule
  ],
  exports: [
    NavigationComponent,
    FileUploadComponent,
    EnumToArrayPipe,
    setImagePipe,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
