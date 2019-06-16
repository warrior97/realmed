import { Component, OnInit, Output } from '@angular/core';
import { FaceServiceService } from '../face-service.service';
import { FacePPHandler } from '../face-pphandler';
import { Person, PersonRootObject } from '../person';
import { PersonDataService } from '../person-data.service';
import { WebcamImage } from '../../../node_modules/ngx-webcam';
@Component({
  selector: 'app-face-show',
  templateUrl: './face-show.component.html',
  styleUrls: ['./face-show.component.css']
})
export class FaceShowComponent implements OnInit {

  ngOnInit() {
  }
  constructor(private face:FaceServiceService,private pds:PersonDataService){}
  public body:any;
  public picTaken: WebcamImage;
  public person:Person;

  async childEventClicked(pic: WebcamImage) {
     this.picTaken = pic;
     let data:Person;
     
     
 
   await this.face.getFaceId(this.picTaken.imageAsBase64).toPromise().
   then(response=>{
     console.log(response.body);
     this.body=response.body;
     
     //console.log(this.body);
   }
   ,error=>{console.log(error);});
   let id=this.body.results[0].user_id;
   console.log(id);
   await this.pds.getPersonById(id).toPromise().then(response=>{
    data=<Person>response;
    console.log(data);
    this.person=data;
  },error=>{
    console.log(error);
  });
 }
}
