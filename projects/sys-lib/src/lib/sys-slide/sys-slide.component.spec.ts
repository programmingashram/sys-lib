import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysSlideComponent } from './sys-slide.component';

describe('SysSlideComponent', () => {
  let component: SysSlideComponent;
  let fixture: ComponentFixture<SysSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
