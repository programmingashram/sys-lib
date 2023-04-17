import { NgModule } from '@angular/core';
import { SysLibComponent } from './sys-lib.component';
import { SysButtonComponent } from './sys-button/sys-button.component';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SysHeaderComponent } from './sys-header/sys-header.component';
import { SysCardComponent } from './sys-card/sys-card.component';
import { SysCardActionComponent } from './sys-card/sys-card-action/sys-card-action.component';
import { SysCardHeadActionComponent } from './sys-card/sys-card-head-action/sys-card-head-action.component';


@NgModule({
  declarations: [
    SysLibComponent,
    SysButtonComponent,
    SysHeaderComponent,
    SysCardComponent,
    SysCardActionComponent,
    SysCardHeadActionComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SysLibComponent,
    SysButtonComponent,
    SysHeaderComponent
  ]
})
export class SysLibModule { }
