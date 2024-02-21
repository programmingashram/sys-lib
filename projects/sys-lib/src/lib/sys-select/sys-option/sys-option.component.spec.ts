import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysOptionComponent } from './sys-option.component';

describe('SysOptionComponent', () => {
  let component: SysOptionComponent;
  let fixture: ComponentFixture<SysOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
