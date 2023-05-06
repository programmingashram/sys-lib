import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysAccordionHeaderComponent } from './sys-accordion-header.component';

describe('SysAccordionHeaderComponent', () => {
  let component: SysAccordionHeaderComponent;
  let fixture: ComponentFixture<SysAccordionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysAccordionHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysAccordionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
