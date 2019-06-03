import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceCaptureComponent } from './face-capture/face-capture.component';
import {FormsModule} from '@angular/forms';
import {WebcamModule, WebcamImage} from 'ngx-webcam';
import {HttpClientModule} from '@angular/common/http';
import { FaceServiceService } from './face-service.service';
import { FaceDisplayComponent } from './face-display/face-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceCaptureComponent,
    FaceDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WebcamModule,
    HttpClientModule
  ],
  providers: [FaceServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
