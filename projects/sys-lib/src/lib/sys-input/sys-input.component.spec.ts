import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysInputComponent } from './sys-input.component';

describe('SysInputComponent', () => {
  let component: SysInputComponent;
  let fixture: ComponentFixture<SysInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
