import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})*/
export interface FaceRectangle {
  width: number;
  top: number;
  left: number;
  height: number;
}
export interface FaceDetectObject {
  image_id: string;
  request_id: string;
  time_used: number;
  faces: Face[];
}


export interface Face {
  face_rectangle: FaceRectangle;
  face_token: string;
}

export interface Thresholds {
  1e-3: number;
  1e-5: number;
  1e-4: number;
}

export interface Result {
  confidence: number;
  user_id: string;
  face_token: string;
}

export interface FaceSearchObject {
  image_id: string;
  faces: Face[];
  time_used: number;
  thresholds: Thresholds;
  request_id: string;
  results: Result[];
}

