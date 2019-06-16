import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaceCaptureComponent } from './face-capture/face-capture.component';
import { FaceShowComponent } from './face-show/face-show.component';
import { FaceAddComponent } from './face-add/face-add.component';
import { FaceDisplayComponent } from './face-display/face-display.component';

const routes: Routes = [
  {path:'face-capture', component:FaceCaptureComponent},
  {path:'face-show', component:FaceShowComponent},
  {path:'face-display', component:FaceDisplayComponent},
  {path:'face-add', component:FaceAddComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
