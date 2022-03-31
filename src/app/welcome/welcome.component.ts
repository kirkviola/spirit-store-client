import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router,
              private sysSvc: SystemService) { }

  toShop(): void {
    this.router.navigate(["/shop"]);
  }

  toBonus(): void {
    this.router.navigate(["/bonus"]);
  }

  toColor(): void {
    this.router.navigate(['/color']);
  }
  ngOnInit(): void {
  }

}
