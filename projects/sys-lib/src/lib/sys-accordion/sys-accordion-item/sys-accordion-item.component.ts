import { Component, Input } from '@angular/core';

@Component({
  selector: 'sys-accordion-item',
  templateUrl: './sys-accordion-item.component.html',
  styleUrls: ['./sys-accordion-item.component.scss']
})
export class SysAccordionItemComponent {
  @Input() active: boolean = false;
  @Input() label: string;
  constructor() { }

  ngOnInit(): void {
  }

  toggleActive() {
    this.active = !this.active;
  }
}
