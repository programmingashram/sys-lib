import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { CardExampleComponent } from './card-example/card-example.component';

const routes: Routes = [
  {
    path: "button", component: ButtonExampleComponent,
  },
  {
    path: "card", component: CardExampleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
