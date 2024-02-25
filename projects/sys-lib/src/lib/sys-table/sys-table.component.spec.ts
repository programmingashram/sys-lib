import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysTableComponent } from './sys-table.component';

describe('SysTableComponent', () => {
  let component: SysTableComponent;
  let fixture: ComponentFixture<SysTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
