import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../system.service';
import { Item } from './item.class';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl: string = this.sysSvc.baseUrl + "/items";
  constructor(private sysSvc: SystemService,
              private http: HttpClient) { }

  list(): Observable<Item[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Item[]>;
  }

  getById(id: number): Observable<Item> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Item>;
  }

  create(item: Item): Observable<Item> {
    return this.http.post(`${this.baseUrl}`, item) as Observable<Item>;
  }

  createByUser(item: Item, id: number): Observable<Item> {
    return this.http.post(`${this.baseUrl}/useritem/${id}`, item) as Observable<Item>;
  }
}
