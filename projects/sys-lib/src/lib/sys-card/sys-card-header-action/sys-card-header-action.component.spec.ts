import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysCardHeaderActionComponent } from './sys-card-header-action.component';

describe('SysCardHeaderActionComponent', () => {
  let component: SysCardHeaderActionComponent;
  let fixture: ComponentFixture<SysCardHeaderActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysCardHeaderActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysCardHeaderActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
