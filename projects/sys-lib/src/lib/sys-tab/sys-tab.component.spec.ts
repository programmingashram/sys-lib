import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysTabComponent } from './sys-tab.component';

describe('SysTabComponent', () => {
  let component: SysTabComponent;
  let fixture: ComponentFixture<SysTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
