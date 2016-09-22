import { Component } from '@angular/core';
import { UploadService } from '../upload/upload.service';

@Component({
	selector: 'action-bar',
	template: require('./action-bar.component.html'),
	styles: [ require('./action-bar.component.scss') ],
})

export class ActionBarComponent { 

	showUploadCount: boolean = true;

	constructor(private uploadService: UploadService) {}

	get uploads() {
		return this.uploadService.uploadList.length;
	}


	

}