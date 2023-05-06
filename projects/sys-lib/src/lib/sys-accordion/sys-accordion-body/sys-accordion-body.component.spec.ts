import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysAccordionBodyComponent } from './sys-accordion-body.component';

describe('SysAccordionBodyComponent', () => {
  let component: SysAccordionBodyComponent;
  let fixture: ComponentFixture<SysAccordionBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysAccordionBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysAccordionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
