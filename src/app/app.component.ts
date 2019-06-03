import { Component } from '@angular/core';
import { WebcamImage } from '../../node_modules/ngx-webcam';
import { FaceServiceService } from './face-service.service';
import { FacePPHandler } from './face-pphandler';
import { Person } from './person';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'REALMED';
  public body:any;
  public picTaken: WebcamImage;
  public person:Person;
constructor(private face:FaceServiceService){}
  childEventClicked(pic: WebcamImage) {
    this.picTaken = pic;
    /*this.face.getFaceId(this.picTaken.imageAsBase64).subscribe((res)=>{
     body=res.body;
      console.log('joj '+res+ res.headers+res.body);
    },
  (err)=>{
    console.log('auc '+err);

  });*/
  this.face.getFaceId(this.picTaken.imageAsBase64).toPromise().
  then(response=>{
    console.log(response.body);
    this.body=response.body;
    this.person=FacePPHandler.getPerson(this.body);
    console.log(this.person);
  }
  ,error=>{console.log(error);})
    
   
}
}
