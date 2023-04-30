import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysDialogActionComponent } from './sys-dialog-action.component';

describe('SysDialogActionComponent', () => {
  let component: SysDialogActionComponent;
  let fixture: ComponentFixture<SysDialogActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysDialogActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysDialogActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
