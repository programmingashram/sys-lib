import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sys-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() active: boolean;
  @Input() tabTitle: any;
  @Input() icon: string;
  @Input() disable: boolean;
}
