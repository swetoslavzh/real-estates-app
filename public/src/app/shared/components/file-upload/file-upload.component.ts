import { Component, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  response: string;

  @Output()
  files = new EventEmitter();

  @Output()
  isFilesDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.uploader = new FileUploader({itemAlias: 'file'});
    this.hasBaseDropZoneOver = false;
  }

  ngAfterViewInit() {
    this.uploader.onAfterAddingFile = (item) => {
      this.files.emit(item.file);
      item.withCredentials = false;
    };

    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }
 }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileSelectedHandler(file: any) {
    console.log('file', file)
  }

  onClearQueue() {
    this.uploader.clearQueue();
    this.isFilesDeleted.emit(true);
  }
}