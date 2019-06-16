import { Component, OnInit, NgModule } from '@angular/core';
import { FaceCaptureComponent } from '../face-capture/face-capture.component';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Person } from '../person';
import { PersonDataService } from '../person-data.service';
import { FaceServiceService } from '../face-service.service';
import { calcBindingFlags } from '../../../node_modules/@angular/core/src/view/util';


/*@NgModule(
  {
    declarations:[FaceCaptureComponent],
  
  }
)*/
@Component({
  selector: 'app-face-add',
  templateUrl: './face-add.component.html',
  styleUrls: ['./face-add.component.css']
})
export class FaceAddComponent implements OnInit {

  constructor(private http:HttpClient,private pds:PersonDataService,private fss:FaceServiceService) { }

  url: string;
  name:string;
  age:number;
  data:File;
  async addUser(){
   
    let per=new Person();
    per.id=-1;
    per.name=this.name;
    per.age=this.age;
    console.log(per);
    this.pds.uploadImage(this.data).toPromise().then(res => {
      per.image='/assets/'+res.name;
      console.log(per);
      this.pds.insertPerson(per).toPromise().then(response=>{
        per.id=3; 
    if(per.id!=-1){
      let result=this.fss.addFaceImageFile(this.data,per);
      
      console.log(result);
    }
      console.log(response);
    }
    ,error=>{
      console.log(error);
    });
    },error=>{
      console.log(error);
    });
    
    
  }

  ngOnInit() {
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.data = <File> event.target.files[0];
      reader.onload = (event) => { //called once readAsDataURL is completed
        
        this.url = reader.result as string;
      }
    }
}
}
