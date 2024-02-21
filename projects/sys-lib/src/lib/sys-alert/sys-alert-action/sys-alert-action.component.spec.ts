import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysAlertActionComponent } from './sys-alert-action.component';

describe('SysAlertActionComponent', () => {
  let component: SysAlertActionComponent;
  let fixture: ComponentFixture<SysAlertActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysAlertActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysAlertActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
