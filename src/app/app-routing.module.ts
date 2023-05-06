import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { CardExampleComponent } from './card-example/card-example.component';
import { TabExampleComponent } from './tab-example/tab-example.component';
import { AccordionExampleComponent } from './accordion-example/accordion-example.component';
import { SidebarExampleComponent } from './sidebar-example/sidebar-example.component';
import { AlertExampleComponent } from './alert-example/alert-example.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { TreeExampleComponent } from './tree-example/tree-example.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { SlideExampleComponent } from './slide-example/slide-example.component';

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
  }
  ,
  {
    path: "dialog", component: DialogExampleComponent,
  }
  ,
  {
    path: "alert", component: AlertExampleComponent,
  }
   ,
  {
    path: "tree", component: TreeExampleComponent,
  }
  ,
  {
    path: "forms", component: FormExampleComponent,
  }
  ,
  {
    path: "togglebuttons", component: SlideExampleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
