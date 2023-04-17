import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysCardHeadActionComponent } from './sys-card-head-action.component';

describe('SysCardHeadActionComponent', () => {
  let component: SysCardHeadActionComponent;
  let fixture: ComponentFixture<SysCardHeadActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysCardHeadActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysCardHeadActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
