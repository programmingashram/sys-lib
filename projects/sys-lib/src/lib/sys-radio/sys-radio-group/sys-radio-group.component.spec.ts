import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysRadioGroupComponent } from './sys-radio-group.component';

describe('SysRadioGroupComponent', () => {
  let component: SysRadioGroupComponent;
  let fixture: ComponentFixture<SysRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysRadioGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
