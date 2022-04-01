import { Injectable } from '@angular/core';
import { User } from 'src/app/users/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  user!: User
  baseUrl: string = 'http://localhost:5089'
  constructor() {
   }

   isLoggedIn(): boolean{
      if (this.user === null || this.user === undefined){
        return false;
      } else { return true }
   }

}
