import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  currentUser: User = new User;
  userId: number = 0;
  password: string = "";
  authenticated: boolean = false;
  passError: boolean = false;
  constructor(private usersSvc: UserService,
              private sysSvc: SystemService,
              private router: Router) { }

  login(): void {
    this.usersSvc.getById(this.userId).subscribe({
      next: res => {
        this.currentUser = res;
        console.debug(res);
        this.sysSvc.user = this.currentUser;
        if (this.password === this.currentUser.password){
          this.authenticated = true;
          console.debug(this.password, this.currentUser.password);
        }
        if (!this.authenticated){
          console.debug(this.password, this.currentUser.password);
          this.passError = true;
          return;
        }
        this.router.navigate(['/shop']);
      },
      error: err => { console.error(err);}
    });
  }
  ngOnInit(): void {
    this.usersSvc.list().subscribe({
      next: res => {
        this.users = res;
        console.debug(res);
      }, error: err => { console.error(err);}
    });
  }

}
