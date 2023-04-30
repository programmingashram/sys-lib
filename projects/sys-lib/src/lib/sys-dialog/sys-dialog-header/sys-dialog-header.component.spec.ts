import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysDialogHeaderComponent } from './sys-dialog-header.component';

describe('SysDialogHeaderComponent', () => {
  let component: SysDialogHeaderComponent;
  let fixture: ComponentFixture<SysDialogHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysDialogHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysDialogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
