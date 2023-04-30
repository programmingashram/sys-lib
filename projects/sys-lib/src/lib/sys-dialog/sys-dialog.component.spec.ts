import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysDialogComponent } from './sys-dialog.component';

describe('SysDialogComponent', () => {
  let component: SysDialogComponent;
  let fixture: ComponentFixture<SysDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
