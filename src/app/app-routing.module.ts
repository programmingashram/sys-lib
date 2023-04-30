import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { CardExampleComponent } from './card-example/card-example.component';
import { TabExampleComponent } from './tab-example/tab-example.component';
import { AccordionExampleComponent } from './accordion-example/accordion-example.component';
import { HeaderExampleComponent } from './header-example/header-example.component';
import { SidebarExampleComponent } from './sidebar-example/sidebar-example.component';
import { BadgeExampleComponent } from './badge-example/badge-example.component';

const routes: Routes = [
  {
    path: "button", component: ButtonExampleComponent,
  },
  {
    path: "card", component: CardExampleComponent,
  }
  ,
  {
    path: "tab", component: TabExampleComponent,
  }
  ,
  {
    path: "accordion", component: AccordionExampleComponent,
  }
  ,
  {
    path: "sidebar", component: SidebarExampleComponent,
  },
  {
    path: "dialog", component: BadgeExampleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
