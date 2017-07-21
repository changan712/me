import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlArrayComponent } from './control-array.component';

describe('ControlArrayComponent', () => {
  let component: ControlArrayComponent;
  let fixture: ComponentFixture<ControlArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
