import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  logged: boolean = false;
  notLogged: boolean = true;
  nuggets: number = 0;

  constructor(private sysSvc: SystemService) {}
  onSubmit(): void {
    this.logged = true;
    this.notLogged = false;
    this.sysSvc.user.nuggetsSet = true;
    this.sysSvc.user.noodleNuggets = this.nuggets;
  }

  ngOnInit(): void {
    this.logged = this.sysSvc.user.nuggetsSet;

  }

}
