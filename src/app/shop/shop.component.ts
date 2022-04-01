import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  logged!: boolean;
  nuggets: number = 0;
  name: string = "";

  constructor(private sysSvc: SystemService) {}
  onSubmit(): void {
    this.logged = true;
    window.location.reload();
  }

  ngOnInit(): void {
    this.logged = this.sysSvc.isLoggedIn();
  }

}
