import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { CardExampleComponent } from './card-example/card-example.component';
import { TabExampleComponent } from './tab-example/tab-example.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
