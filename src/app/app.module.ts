import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { sysDesignModule } from 'projects/sys-lib/src/public-api';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HeaderExampleComponent } from './header-example/header-example.component';
import { CardExampleComponent } from './card-example/card-example.component';
import { HomeComponent } from './home/home.component';
import { TabExampleComponent } from './tab-example/tab-example.component';
import { AccordionExampleComponent } from './accordion-example/accordion-example.component';
import { SidebarExampleComponent } from './sidebar-example/sidebar-example.component';
//  ng run sys-design:storybook
//  ng run sys-design:build-storybook

@NgModule({
  declarations: [
    AppComponent,
    ButtonExampleComponent,
    HeaderExampleComponent,
    CardExampleComponent,
    HomeComponent,
    TabExampleComponent,
    AccordionExampleComponent,
    SidebarExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    sysDesignModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
