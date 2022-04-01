import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users/user.class';
import { SystemService } from '../system.service';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users!: User[];
  constructor(private sysSvc: SystemService,
              private usersSvc: UserService) { }

  ngOnInit(): void {
    // Add route guard
    this.usersSvc.list().subscribe({
      next: res => {
        this.users = res;
        console.debug(res);
      }, error: err => { console.error(err);}
    });
  }

}
