import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysHeaderComponent } from './sys-header.component';

describe('SysHeaderComponent', () => {
  let component: SysHeaderComponent;
  let fixture: ComponentFixture<SysHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
