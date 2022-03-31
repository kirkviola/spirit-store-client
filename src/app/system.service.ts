import { Injectable } from '@angular/core';
import { User } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  user!: User

  constructor() { }

}
