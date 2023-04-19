import { Component, ContentChild, Input } from '@angular/core';
import { SysCardActionComponent } from './sys-card-action/sys-card-action.component';
import { SysCardContentComponent } from './sys-card-content/sys-card-content.component';
import { SysCardHeaderActionComponent } from './sys-card-header-action/sys-card-header-action.component';

@Component({
  selector: 'sys-card',
  templateUrl: './sys-card.component.html',
  styleUrls: ['./sys-card.component.scss']
})
export class SysCardComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() icon!: string;
  @Input() preIcon!: string;
  @Input() cardImg?: string;
  @Input() flatImage:boolean;
  @Input() horigentalCard: boolean;
  @ContentChild(SysCardHeaderActionComponent) sysCardHeaderAction: SysCardHeaderActionComponent;


}
