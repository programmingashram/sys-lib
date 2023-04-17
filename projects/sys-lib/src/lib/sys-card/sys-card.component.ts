import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-sys-card',
  templateUrl: './sys-card.component.html',
  styleUrls: ['./sys-card.component.scss']
})
export class SysCardComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
}
