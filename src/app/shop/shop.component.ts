import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from '@angular/router';
import { LoginGuard } from '../login.guard';
import { SystemService } from '../system.service';
import { User } from '../users/user.class';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  user: User = new User();
  hasInventory: boolean = false;
  constructor(private sysSvc: SystemService,
              private router: Router) {}


  ngOnInit(): void {
    if (!this.sysSvc.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    this.user = this.sysSvc.user;
    this.hasInventory = this.sysSvc.hasInventory();
  }
}
