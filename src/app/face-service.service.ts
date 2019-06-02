import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FacePPHandler } from './face-pphandler';
@Injectable({
  providedIn: 'root'
})
export class FaceServiceService {
  private FACE_COMPARE="https://api-us.faceplusplus.com/facepp/v3/compare";
  private FACE_SEARCH="https://api-us.faceplusplus.com/facepp/v3/search";


  private API_KEY="IyxqaTgYFczENwVebQu0t72focDwT";
  private API_SECRET="oRqIhnU4hjvmlA2sXwh9-cmhc9SFZoYK";
  private FACE_SET_TOKEN="3f0214f33cda6079693488107f728132";


  constructor(private http: HttpClient) { }
  
  getFaceId(imageData:string):any
  {
    let par={"api_key":this.API_KEY,"api_secret":this.API_SECRET,
    "image_base64":imageData,"faceset_token":this.FACE_SET_TOKEN
    };
    this.http.post(this.FACE_SEARCH,par)
  }
}
