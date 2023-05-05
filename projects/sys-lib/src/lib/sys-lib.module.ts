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
import { SysSidebarContentComponent } from './sys-sidebar/sys-sidebar-content/sys-sidebar-content.component';
import { SysTabComponent } from './sys-tab/sys-tab.component';
import { TabComponent } from './sys-tab/tab/tab.component';
import { SysAccordionComponent } from './sys-accordion/sys-accordion.component';
import { SysAccordionItemComponent } from './sys-accordion/sys-accordion-item/sys-accordion-item.component';
import { SysAccordionHeaderComponent } from './sys-accordion/sys-accordion-header/sys-accordion-header.component';
import { SysAccordionBodyComponent } from './sys-accordion/sys-accordion-body/sys-accordion-body.component';
import { SysPanelHeaderComponent } from './sys-accordion/sys-panel-header/sys-panel-header.component';
import { SysDialogComponent } from './sys-dialog/sys-dialog.component';
import { SysDialogHeaderComponent } from './sys-dialog/sys-dialog-header/sys-dialog-header.component';
import { SysDialogBodyComponent } from './sys-dialog/sys-dialog-body/sys-dialog-body.component';
import { SysDialogActionComponent } from './sys-dialog/sys-dialog-action/sys-dialog-action.component';
import { SysAlertComponent } from './sys-alert/sys-alert.component';
import { SysAlertActionComponent } from './sys-alert/sys-alert-action/sys-alert-action.component';
import { SysTreeComponent } from './sys-tree/sys-tree.component';
import { SysSelectComponent } from './sys-select/sys-select.component';
import { SysOptionComponent } from './sys-select/sys-option/sys-option.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SysInputComponent } from './sys-input/sys-input.component';
import { SysRadioComponent } from './sys-radio/sys-radio.component';
import { SysRadioGroupComponent } from './sys-radio/sys-radio-group/sys-radio-group.component';



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
    SysSidebarContainerComponent,
    SysSidebarContentComponent,
    SysTabComponent,
    TabComponent,
    SysAccordionComponent,
    SysAccordionItemComponent,
    SysAccordionHeaderComponent,
    SysAccordionBodyComponent,
    SysPanelHeaderComponent,
    SysDialogComponent,
    SysDialogHeaderComponent,
    SysDialogBodyComponent,
    SysDialogActionComponent,
    SysAlertComponent,
    SysAlertActionComponent,
    SysTreeComponent,
    SysSelectComponent,
    SysOptionComponent,
    SysInputComponent,
    SysRadioComponent,
    SysRadioGroupComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
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
    SysSidebarItemComponent,
    SysSidebarContainerComponent,
    SysSidebarContentComponent,
    SysTabComponent,
    TabComponent,
    SysAccordionComponent,
    SysAccordionItemComponent,
    SysAccordionHeaderComponent,
    SysAccordionBodyComponent,
    SysPanelHeaderComponent,
    SysDialogComponent,
    SysDialogBodyComponent,
    SysDialogActionComponent,
    SysDialogHeaderComponent,
    SysAlertComponent,
    SysAlertActionComponent,
    SysTreeComponent,
    SysSelectComponent,
    SysOptionComponent,
    SysInputComponent,
    SysRadioComponent,
    SysRadioGroupComponent
  ]
})
export class sysDesignModule { }
