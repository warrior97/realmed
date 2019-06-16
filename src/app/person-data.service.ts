import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '../../node_modules/@angular/common/http';
import { Person, PersonRootObject } from './person';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  private LOCALHOST='localhost:4200';
  private GET_PERSON_BYID='/api/getbyid';
  private INSERT_PERSON='/api/addperson';  
  private UPLOAD_IMAGE='/api/upload';

  constructor(private http:HttpClient) { }

  getPersonById(id:number):Observable<Person>{
    var body={'id':id}
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Person>(this.GET_PERSON_BYID,JSON.stringify(body),httpOptions);
  }
  insertPerson(per:Person):Observable<Person> {
    console.log(per);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Person>(this.INSERT_PERSON,JSON.stringify(per),httpOptions);
  }
  uploadImage(data:File):Observable<any>{
    let fd = new FormData();
    fd.append('image', data, data.name);
    return this.http.post<any>(this.UPLOAD_IMAGE, fd);
  }
}