import { NgModule } from '@angular/core';
import { SysLibComponent } from './sys-lib.component';
import { SysButtonComponent } from './sys-button/sys-button.component';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SysHeaderComponent } from './sys-header/sys-header.component';
import { SysCardComponent } from './sys-card/sys-card.component';
import { SysCardActionComponent } from './sys-card/sys-card-action/sys-card-action.component';
import { SysCardContentComponent } from './sys-card/sys-card-content/sys-card-content.component';
import { SysCardHeaderActionComponent } from './sys-card/sys-card-header-action/sys-card-header-action.component';
import { RouterModule } from '@angular/router';

import { SysSidebarComponent } from './sys-sidebar/sys-sidebar.component';
import { SysSidebarItemComponent } from './sys-sidebar/sys-sidebar-item/sys-sidebar-item.component';
import { SysSidebarContainerComponent } from './sys-sidebar/sys-sidebar-container/sys-sidebar-container.component';


@NgModule({
  declarations: [
    SysLibComponent,
    SysButtonComponent,
    SysHeaderComponent,
    SysCardComponent,
    SysCardActionComponent,
    SysCardContentComponent,
    SysCardHeaderActionComponent,
    SysSidebarComponent,
    SysSidebarItemComponent,
    SysSidebarContainerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    SysLibComponent,
    SysButtonComponent,
    SysHeaderComponent,
    SysCardComponent,
    SysCardActionComponent,
    SysCardContentComponent,
    SysCardHeaderActionComponent,
    SysSidebarComponent,
    SysSidebarItemComponent
  ]
})
export class sysModule { }
