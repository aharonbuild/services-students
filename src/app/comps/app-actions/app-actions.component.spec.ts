import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppActionsComponent } from './app-actions.component';

describe('AppActionsComponent', () => {
  let component: AppActionsComponent;
  let fixture: ComponentFixture<AppActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
