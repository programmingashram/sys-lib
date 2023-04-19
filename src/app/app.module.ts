import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SysLibModule } from 'projects/sys-lib/src/public-api';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HeaderExampleComponent } from './header-example/header-example.component';
import { CardExampleComponent } from './card-example/card-example.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonExampleComponent,
    HeaderExampleComponent,
    CardExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SysLibModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
