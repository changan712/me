import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestDetailComponent } from './quest-detail.component';

describe('QuestDetailComponent', () => {
  let component: QuestDetailComponent;
  let fixture: ComponentFixture<QuestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
