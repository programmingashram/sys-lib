import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysCardActionComponent } from './sys-card-action.component';

describe('SysCardActionComponent', () => {
  let component: SysCardActionComponent;
  let fixture: ComponentFixture<SysCardActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysCardActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysCardActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
