import { NgModule } from '@angular/core';
import { SysLibComponent } from './sys-lib.component';
import { SysButtonComponent } from './sys-button/sys-button.component';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SysLibComponent,
    SysButtonComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SysLibComponent,
    SysButtonComponent
  ]
})
export class SysLibModule { }
