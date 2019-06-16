import { Component } from '@angular/core';
import { WebcamImage } from '../../node_modules/ngx-webcam';
import { FaceServiceService } from './face-service.service';
import { FacePPHandler } from './face-pphandler';
import { Person, PersonRootObject } from './person';
import { PersonDataService } from './person-data.service';
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


constructor(private face:FaceServiceService,private user:PersonDataService){}


 async childEventClicked(pic: WebcamImage) {
    this.picTaken = pic;
    let data:Person;
    
    await this.user.getPersonById(0).toPromise().then(response=>{
      data=<Person>response;
      console.log(data);
    
    },error=>{
      console.log(error);
    });

  await this.face.getFaceId(this.picTaken.imageAsBase64).toPromise().
  then(response=>{
    console.log(response.body);
    this.body=response.body;
    this.person=FacePPHandler.getPerson(this.body);
    console.log(this.person);
  }
  ,error=>{console.log(error);});
   
}
}
