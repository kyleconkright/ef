import { Component } from '@angular/core';
import { UploadService } from '../upload/upload.service';

@Component({
	selector: 'my-files',
	template: require('./my-files.component.html'),
	styles: [ require('./my-files.component.scss') ],
})

export class MyFilesComponent { 

	constructor(private uploadService: UploadService) {}

	get uploads() {
		return this.uploadService.getFiles();
	}

	delete(upload) {
		console.log(this.uploadService.uploadList.splice(upload, 1));
	}

}