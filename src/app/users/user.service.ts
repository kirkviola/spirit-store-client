import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../system.service';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = this.sysSvc.baseUrl + '/users/';
  constructor(private http: HttpClient,
              private sysSvc: SystemService) { }

    list(): Observable<User[]> {
      return this.http.get(`${this.baseUrl}`) as Observable<User[]>;
    }

    getById(id: number): Observable<User> {
      return this.http.get(`${this.baseUrl}/${id}`) as Observable<User>;
    }

    create(user: User): Observable<User> {
      return this.http.post(`${this.baseUrl}`, user) as Observable<User>;
    }
    update(user: User): Observable<User> {
      return this.http.put(`${this.baseUrl}/${user.id}`, user) as Observable<User>;
    }
    remove(id: number): Observable<User> {
      return this.http.delete(`${this.baseUrl}/${id}`) as Observable<User>;
    }
}
