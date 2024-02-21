import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysAlertComponent } from './sys-alert.component';

describe('SysAlertComponent', () => {
  let component: SysAlertComponent;
  let fixture: ComponentFixture<SysAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
