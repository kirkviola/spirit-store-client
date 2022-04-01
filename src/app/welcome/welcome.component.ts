import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  admin: boolean = false;
  constructor(private router: Router,
              private sysSvc: SystemService) { }

  toShop(): void {
     let path: string = this.sysSvc.isLoggedIn() ? '/shop' : '/login';
     this.router.navigate([`${path}`])
  }

  toBonus(): void {
    this.router.navigate(["/bonus"]);
  }

  toColor(): void {
    this.router.navigate(['/color']);
  }
  ngOnInit(): void {
    this.admin = this.sysSvc.user.isAdmin ? true : false;
  }

}
