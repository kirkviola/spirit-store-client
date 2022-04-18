import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from '@angular/router';
import { LoginGuard } from '../login.guard';
import { SystemService } from '../system.service';
import { User } from '../users/user.class';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  user!: User
  
  constructor(private sysSvc: SystemService,
              private router: Router) {}


  ngOnInit(): void {
    if (!this.sysSvc.isLoggedIn()){
      this.router.navigate(['/login']);
      this.user = this.sysSvc.user;

    }
  }
}
