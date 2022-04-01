import { Injectable } from '@angular/core';
import { User } from 'src/users/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  name!: string;
  total!: number;
  logged!: boolean;

  constructor() {

   }

}
