import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysAccordionItemComponent } from './sys-accordion-item.component';

describe('SysAccordionItemComponent', () => {
  let component: SysAccordionItemComponent;
  let fixture: ComponentFixture<SysAccordionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysAccordionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysAccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
