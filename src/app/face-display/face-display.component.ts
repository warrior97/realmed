import { Component, OnInit, Input } from '@angular/core';
import { WebcamImage } from '../../../node_modules/ngx-webcam';
import { Person } from '../person';

@Component({
  selector: 'app-face-display',
  templateUrl: './face-display.component.html',
  styleUrls: ['./face-display.component.css']
})
export class FaceDisplayComponent implements OnInit {

  @Input()
  toDisplay:WebcamImage;
  @Input()
  person:Person;
  constructor() { }

  ngOnInit() {
    
  }
 
}
