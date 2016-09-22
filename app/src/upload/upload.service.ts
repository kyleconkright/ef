import { Injectable } from '@angular/core'

@Injectable()

export class UploadService {

	uploadList:Array<any>;

	constructor() {
		this.uploadList = [];
	}

	getCount() {
		this.uploadList.length;
	}


	getFiles() {
		return this.uploadList;
	}
}