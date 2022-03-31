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
  nuggets: number = 0;
  name: string = "";

  constructor(private sysSvc: SystemService) {}
  onSubmit(): void {
    this.logged = true;
    this.sysSvc.user.nuggetsSet = true;
    this.sysSvc.user.noodleNuggets = this.nuggets;
    this.sysSvc.user.name = this.name;
    window.location.reload();
  }

  ngOnInit(): void {
    this.logged = this.sysSvc.user.nuggetsSet;

  }

}
