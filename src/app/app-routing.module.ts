import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonusComponent } from './bonus/bonus.component';
import { ColorComponent } from './color/color.component';
import { ShopComponent } from './shop/shop.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: "welcome", pathMatch: "full" },

  { path: "welcome", component: WelcomeComponent },

  { path: "shop", component: ShopComponent},
  { path: "bonus", component: BonusComponent },
  { path: "color", component: ColorComponent},

  { path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
