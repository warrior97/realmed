import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FacePPHandler } from './face-pphandler';
import { Observable } from '../../node_modules/rxjs';
@Injectable({
  providedIn: 'root',
})
export class FaceServiceService {
  private FACE_COMPARE="https://api-us.faceplusplus.com/facepp/v3/compare";
  private FACE_SEARCH="https://api-us.faceplusplus.com/facepp/v3/search";


  private API_KEY="IyxqaTgYFczENwVebQu0t72focDwT3vq";
  private API_SECRET="oRqIhnU4hjvmlA2sXwh9-cmhc9SFZoYK";
  private FACE_SET_TOKEN="3f0214f33cda6079693488107f728132";


  constructor(private http: HttpClient) { }
  
  getFaceId(imageData:string):Observable<HttpResponse<any>> 
  {
    let data=new FormData();
    
    /*let par={api_key:this.API_KEY,api_secret:this.API_SECRET,
    image_base64:imageData,faceset_token:this.FACE_SET_TOKEN
    };*/
    data.append('api_key',this.API_KEY);
    data.append('api_secret',this.API_SECRET);
    data.append('image_base64',imageData);
    data.append('faceset_token',this.FACE_SET_TOKEN);
  

    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Credentials':'true',
     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
'Access-Control-Allow-Methods': 'POST',

'Access-Control-Max-Age': '86400'

   });  
   console.log(data);
   return this.http.post<any>(this.FACE_SEARCH,data,{
	/*	headers: httpHeaders,  */
		  observe: 'response'
    });

  }
}
