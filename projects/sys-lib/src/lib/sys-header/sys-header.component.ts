import { Component, Input } from '@angular/core';

@Component({
  selector: 'sys-header',
  templateUrl: './sys-header.component.html',
  styleUrls: ['./sys-header.component.scss']
})
export class SysHeaderComponent {
  @Input() logo!: any;
  @Input() Menu!: any[];
}
