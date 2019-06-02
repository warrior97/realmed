import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceDisplayComponent } from './face-display.component';

describe('FaceDisplayComponent', () => {
  let component: FaceDisplayComponent;
  let fixture: ComponentFixture<FaceDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
