import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user!: User;
  userNbr: number = 0;
  errorMsg: string | undefined;

  constructor(private userSvc: UserService,
              private route: ActivatedRoute,
              private sysSvc: SystemService,
              private router: Router) { }


  save(): void {
    this.userSvc.update(this.user).subscribe({
      next: res => { console.debug(res, 'user updated');
                     this.router.navigate(["/users"]); },
      error: err => { console.error(err); }
    });
  }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
    this.userNbr = +this.route.snapshot.params['id'];

    this.userSvc.getById(this.userNbr).subscribe({
      next: res => {
        console.debug(res);
        this.user = res;
      },
      error: err => { console.error(err);
      this.errorMsg = "User not found!" }
    });
  }

}
