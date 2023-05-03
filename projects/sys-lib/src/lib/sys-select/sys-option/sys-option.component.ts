import { Component, Input } from '@angular/core';

@Component({
  selector: 'sys-option',
  templateUrl: './sys-option.component.html',
  styleUrls: ['./sys-option.component.scss']
})
export class SysOptionComponent {
  @Input() options: string[];
}
