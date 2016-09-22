import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MyFilesComponent } from './my-files/my-files.component';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './upload/upload.service';

import { AppComponent } from './app.component';

@NgModule({
	imports: [ BrowserModule, routing ],
	declarations: [ AppComponent, HeaderComponent, ActionBarComponent, MyFilesComponent, UploadComponent ],
	providers: [UploadService],
	bootstrap: [ AppComponent ]
})

export class AppModule { }