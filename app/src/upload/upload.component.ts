import { Component, OnInit } from '@angular/core';
import { UploadService } from './upload.service';

@Component({
	selector: 'upload',
	template: require('./upload.component.html'),
	styles: [ require('./upload.component.scss') ],
})

export class UploadComponent {
	
	uploadStatus: string = 'Please Choose Your File';
	selectFileText: string = 'Select File';
	uploadName: string;
	hasFiles:boolean = false;
	icon: string = '&times;'
	uploading: boolean = false;
	uploaded: boolean = false;
	percentage: number = 0;
	feedback: string = '';
	uploads;
	count;

	constructor(private uploadService: UploadService) {}

	getUploads() {
		this.uploads = this.uploadService.getFiles();
        this.uploads.push(this.uploadName);
        console.log(this.uploads.length);
        return this.uploads;
	}
	
	update(fileName) {
		this.uploadName = fileName;
		if(this.uploadName === '') {
			this.hasFiles = false;
		} else {
			this.hasFiles = true;
			this.uploaded = false;
		}
	} 

	reset() {
		this.uploadName = '';
		this.hasFiles = false;
		this.uploadStatus = 'Please Choose Your File';
		this.percentage = 0;
		this.feedback = '';
		this.uploaded = false;
	}

	upload() {
		this.uploadStatus = 'Uploading...';
		this.uploading = true;
		this.count = setInterval(() => {
			this.percentage = this.percentage + 1;
			if(this.percentage > 99) {
				clearInterval(this.count);
				this.uploadStatus = 'Success!'
				this.uploaded = true;
				this.uploading = false;
				this.feedback = 'Your file has been uploaded and saved to your files!';
				this.selectFileText = 'Upload Another';
				this.percentage = 0;
				this.getUploads();
			}	
		}, 50);	
	}
}


