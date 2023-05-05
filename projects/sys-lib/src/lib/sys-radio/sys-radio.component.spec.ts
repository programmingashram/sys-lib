import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysRadioComponent } from './sys-radio.component';

describe('SysRadioComponent', () => {
  let component: SysRadioComponent;
  let fixture: ComponentFixture<SysRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
