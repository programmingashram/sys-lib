import { Component, Input } from '@angular/core';

@Component({
  selector: 'sys-accordion-item',
  templateUrl: './sys-accordion-item.component.html',
  styleUrls: ['./sys-accordion-item.component.scss']
})
export class SysAccordionItemComponent {
  @Input() active: boolean = false;
  @Input() label: string;
  @Input() discription: string;
  @Input() disable: boolean;
  @Input() expendless: string = "expand_less";
  @Input() expendMore: string = "expand_more";
  constructor() { }

  ngOnInit(): void {
  }

  toggleActive() {
    this.active = !this.active;
  }
}
