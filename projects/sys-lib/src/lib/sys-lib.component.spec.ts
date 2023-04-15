import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysLibComponent } from './sys-lib.component';

describe('SysLibComponent', () => {
  let component: SysLibComponent;
  let fixture: ComponentFixture<SysLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
