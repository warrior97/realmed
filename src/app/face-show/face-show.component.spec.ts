import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceShowComponent } from './face-show.component';

describe('FaceShowComponent', () => {
  let component: FaceShowComponent;
  let fixture: ComponentFixture<FaceShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
