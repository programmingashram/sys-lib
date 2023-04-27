import { Component, ContentChildren, QueryList } from '@angular/core';
import { SysAccordionItemComponent } from './sys-accordion-item/sys-accordion-item.component';

@Component({
  selector: 'sys-accordion',
  templateUrl: './sys-accordion.component.html',
  styleUrls: ['./sys-accordion.component.scss']
})
export class SysAccordionComponent {
  @ContentChildren(SysAccordionItemComponent) panels: QueryList<SysAccordionItemComponent>;

  constructor() { }

  ngOnInit(): void {
    this.panels.toArray()[0].active = true;
  }

  togglePanel(panel: SysAccordionItemComponent) {
    this.panels.toArray().forEach(p => {
      if (p !== panel) {
        p.active = false;
      }
    });
    panel.active = !panel.active;
  }
}
