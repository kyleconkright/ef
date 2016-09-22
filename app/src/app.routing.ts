import { RouterModule } from '@angular/router';
import { MyFilesComponent } from './my-files/my-files.component';
import { UploadComponent } from './upload/upload.component';

export const routing = RouterModule.forRoot([
	{
		path: '',
		redirectTo: '/upload',
		pathMatch: 'full'
	},
	{
		path: 'myfiles',
		component: MyFilesComponent
	},
	{
		path: 'upload',
		component: UploadComponent
	}
]);