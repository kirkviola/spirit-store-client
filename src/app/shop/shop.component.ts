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
    this.sysSvc.name = this.name;
    this.sysSvc.total = this.nuggets;
    this.sysSvc.logged = this.logged;
    window.location.reload();
  }

  ngOnInit(): void {
    this.logged = this.sysSvc.logged;
    if (this.sysSvc.logged === null ||
        this.sysSvc.logged === undefined){
          this.logged = false;
        }
  }

}
