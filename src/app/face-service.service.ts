import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FacePPHandler } from './face-pphandler';
import { Observable } from '../../node_modules/rxjs';
import { FnParam } from '../../node_modules/@angular/compiler/src/output/output_ast';
import { WebcamImage } from '../../node_modules/ngx-webcam';
import { Person } from './person';
import { FaceDetectObject, Face } from './face-objects/face-objects.module';
@Injectable({
  providedIn: 'root',
})
export class FaceServiceService {
  private FACE_COMPARE="https://api-us.faceplusplus.com/facepp/v3/compare";
  private FACE_SEARCH="https://api-us.faceplusplus.com/facepp/v3/search";
  private FACE_ADD="https://api-us.faceplusplus.com/facepp/v3/faceset/addface";
  private FACE_DETECT="https://api-us.faceplusplus.com/facepp/v3/detect";
  private FACE_SET_ID='https://api-us.faceplusplus.com/facepp/v3/face/setuserid';


  private API_KEY="IyxqaTgYFczENwVebQu0t72focDwT3vq";
  private API_SECRET="oRqIhnU4hjvmlA2sXwh9-cmhc9SFZoYK";
  private FACE_SET_TOKEN="3f0214f33cda6079693488107f728132";
  private API_KEY_FIELD='api_key';
  private API_SECRET_FIELD='api_secret';
  private IMAGE_B64_FIELD='image_base64';
  private IMAGE_FILE_FIELD='image_file';
  private FACESET_TOKEN_FIELD='faceset_token';
  private FACE_TOKENS_FIELD='face_tokens';
  private FACE_TOKEN_FIELD='face_token';
  private FACE_USER_ID='user_id';
  

  constructor(private http: HttpClient) { }

//uzima postavlja ID lica sa face_tokenom
  setUserId(face_token:string,id:number){
    let data= new FormData();
    data.append(this.API_KEY_FIELD,this.API_KEY);
    data.append(this.API_SECRET_FIELD,this.API_SECRET);
    data.append(this.FACE_TOKEN_FIELD,face_token);
    data.append(this.FACE_USER_ID,''+id);
    return this.http.post<any>(this.FACE_SET_ID,data,{observe:'response'});
  }

  //dodaje lice u facSet sa WebcamImage
  addFaceImage(image:WebcamImage,person:Person){

    this.detectFace(image,person).toPromise().then(response=>{
      let fdo=<FaceDetectObject>response.body;
      if(fdo.faces.length>0){
        let f=<Face>fdo.faces[0];

        this.addFace(f.face_token,person).toPromise().then(response=>{
          this.setUserId(f.face_token,person.id);
          return true;
        },error=>{console.log(error); return false;});
        
      }else
      {
        console.log('No faces found!');
      }
    }
    ,error=>{console.log(error);return false;})
         
  }
  //dodaje lice u facSet sa WebcamImage
  async addFaceImageFile(image:File,person:Person){
    let fdo;
    await this.detectFaceFile(image,person).toPromise().then(response=>{
      fdo=<FaceDetectObject>response.body;
      console.log(response);
    }
    ,error=>{console.log(error);return false;});
    if(fdo.faces.length>0){
      let f=<Face>fdo.faces[0];
      
      await this.addFace(f.face_token,person).toPromise().then(response=>{
        console.log(response);
      },error=>{console.log(error);});
      await this.setUserId(f.face_token,person.id).toPromise().then(res=>{
        console.log(res);
      },error=>{

        console.log(error);
      });
      return true;
    }
         
  }

  //dodaje lice u faceset sa odredjenim tokenom
  addFace(faceToken:string,person:Person):Observable<HttpResponse<any>> {
    let data= new FormData();
    data.append(this.API_KEY_FIELD,this.API_KEY);
    data.append(this.API_SECRET_FIELD,this.API_SECRET);
    data.append(this.FACESET_TOKEN_FIELD,this.FACE_SET_TOKEN);
    data.append(this.FACE_TOKENS_FIELD,faceToken);
    return this.http.post<FaceDetectObject>(this.FACE_ADD,data,{observe:'response'});
    
  }

  //detektuje lice
  detectFace(image:WebcamImage,person:Person){
    let data= new FormData();
    data.append(this.API_KEY_FIELD,this.API_KEY);
    data.append(this.API_SECRET_FIELD,this.API_SECRET);
    data.append(this.IMAGE_B64_FIELD,image.imageAsBase64);

    return this.http.post<FaceDetectObject>(this.FACE_DETECT,data,{observe:'response'});

  }
  detectFaceFile(image:File,person:Person){
    let data= new FormData();
    data.append(this.API_KEY_FIELD,this.API_KEY);
    data.append(this.API_SECRET_FIELD,this.API_SECRET);
    data.append(this.IMAGE_FILE_FIELD,image);

    return this.http.post<FaceDetectObject>(this.FACE_DETECT,data,{observe:'response'});

  }
  //vraca poatke o pronedjenim licima
  getFaceId(imageData:string):Observable<HttpResponse<any>> 
  {
    let data=new FormData();
    
    /*let par={api_key:this.API_KEY,api_secret:this.API_SECRET,
    image_base64:imageData,faceset_token:this.FACE_SET_TOKEN
    };*/
    data.append(this.API_KEY_FIELD,this.API_KEY);
    data.append(this.API_SECRET_FIELD,this.API_SECRET);
    data.append(this.IMAGE_B64_FIELD,imageData);
    data.append(this.FACESET_TOKEN_FIELD,this.FACE_SET_TOKEN);
  
   //console.log(data);
   return this.http.post<any>(this.FACE_SEARCH,data,{
		  observe: 'response'
    });

  }
}
