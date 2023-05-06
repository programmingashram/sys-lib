import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysAccordionComponent } from './sys-accordion.component';

describe('SysAccordionComponent', () => {
  let component: SysAccordionComponent;
  let fixture: ComponentFixture<SysAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
