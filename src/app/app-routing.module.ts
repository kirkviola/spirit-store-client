import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonusComponent } from './bonus/bonus.component';
import { ColorComponent } from './color/color.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginGuard } from './login.guard';
import { UsersModifierComponent } from './users/users-modifier.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { InventoryComponent } from './shop/inventory/inventory.component';

const routes: Routes = [
  { path: '', redirectTo: "welcome", pathMatch: "full" },

  { path: "welcome", component: WelcomeComponent },

  { path: "login", component: LoginComponent },
  { path: "shop", component: ShopComponent },
  { path: "shop/inventory", component: InventoryComponent },
  { path: "bonus", component: BonusComponent },
  { path: "color", component: ColorComponent},
  { path: "users", component: UsersModifierComponent},
  { path: "users/edit/:id", component: UserEditComponent},

  { path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
