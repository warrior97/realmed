import { HttpClient } from '../../node_modules/@types/selenium-webdriver/http';
import { HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { FaceServiceService } from './face-service.service';
import { Person } from './person';

export class FacePPHandler {
   


    public static getPerson(imageData:any):Person{

        let id=imageData.results[0].user_id;
        console.log(id);
        
        if(id==0){
            return new Person("Bobicic Dusan",21,"assets/bobi.jpg");
        }else if(id==1){
            return new Person("Gvozdenovic Milos",21,"assets/gvole.jpg");
        }else if(id==2){
            return new Person("Anisia Jovanovski",22,"assets/anisia.jpg");
        }
    }
}
