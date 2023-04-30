import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysDialogBodyComponent } from './sys-dialog-body.component';

describe('SysDialogBodyComponent', () => {
  let component: SysDialogBodyComponent;
  let fixture: ComponentFixture<SysDialogBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysDialogBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
