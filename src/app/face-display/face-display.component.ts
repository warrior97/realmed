import { Component, OnInit, Input } from '@angular/core';
import { WebcamImage } from '../../../node_modules/ngx-webcam';

@Component({
  selector: 'app-face-display',
  templateUrl: './face-display.component.html',
  styleUrls: ['./face-display.component.css']
})
export class FaceDisplayComponent implements OnInit {

  @Input()
  toDisplay:WebcamImage;

  constructor() { }

  ngOnInit() {
  }

}
