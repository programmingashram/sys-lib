import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysSelectComponent } from './sys-select.component';

describe('SysSelectComponent', () => {
  let component: SysSelectComponent;
  let fixture: ComponentFixture<SysSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
