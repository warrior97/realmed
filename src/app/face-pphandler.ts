import { HttpClient } from '../../node_modules/@types/selenium-webdriver/http';
import { HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { FaceServiceService } from './face-service.service';
import { Person } from './person';
import { PersonDataService } from './person-data.service';

export class FacePPHandler {
   


    public static getPerson(imageData:any):Person{

        let id=imageData.results[0].user_id;
        console.log(id);
        let pesrons=PersonDataService
        if(id==0){
            return new Person(0,"Bobicic Dusan",21,"assets/bobi.jpg");
        }else if(id==1){
            return new Person(1,"Gvozdenovic Milos",21,"assets/gvole.jpg");
        }else if(id==2){
            return new Person(2,"Anisia Jovanovski",22,"assets/anisia.jpg");
        }
    }
}
