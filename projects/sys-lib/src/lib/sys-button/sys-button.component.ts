import { Component, Input, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'sys-button',
  templateUrl: './sys-button.component.html',
  styleUrls: ['./sys-button.component.scss']
})
export class SysButtonComponent {
  @Input() icon!: string;
  @Input() color!: string;
  @Input() disable!: boolean;
  @Input() outline!: boolean;
  @Input() type!: string;
  @Input() iconBtn!: boolean;



}
