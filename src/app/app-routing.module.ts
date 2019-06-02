import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaceCaptureComponent } from './face-capture/face-capture.component';

const routes: Routes = [
  {path:'face-capture', component:FaceCaptureComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
