import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
              private sysSvc: SystemService) { }


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
