import { NgModule } from '@angular/core';
import { SysLibComponent } from './sys-lib.component';
import { SysButtonComponent } from './sys-button/sys-button.component';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SysHeaderComponent } from './sys-header/sys-header.component';
import { NestedMenuComponent } from './sys-header/nested-menu/nested-menu.component';


@NgModule({
  declarations: [
    SysLibComponent,
    SysButtonComponent,
    SysHeaderComponent,
    NestedMenuComponent
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
