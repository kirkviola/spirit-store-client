import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system.service';
import { User } from './user.class';
import { UserService } from './user.service';

@Component({
  selector: 'app-users-modifier',
  templateUrl: './users-modifier.component.html',
  styleUrls: ['./users-modifier.component.css']
})
export class UsersModifierComponent implements OnInit {

  constructor(private sysSvc: SystemService,
              private usrSvc: UserService) { }

  users: User[] = [];
  displayedColumns: string[] = [
    "Name", "Edit"
  ];

  ngOnInit(): void {
    this.sysSvc.isLoggedIn();

    this.usrSvc.list().subscribe({
      next: res => {
        console.debug(res);
        this.users = res;
      },
      error: err => { console.error(err);}
    });
  }

}
