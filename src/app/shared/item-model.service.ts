import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../system.service';
import { ItemModel } from './item-model.class';

@Injectable({
  providedIn: 'root'
})
export class ItemModelService {

  baseUrl: string = this.sysSvc.baseUrl + "/itemmodels";
  constructor(private sysSvc: SystemService,
              private http: HttpClient) { }

  list(): Observable<ItemModel[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<ItemModel[]>;
  }

  getById(id: number): Observable<ItemModel> {
    return this.http.get(`${this.baseUrl}/$${id}`) as Observable<ItemModel>;
  }

  create(model: ItemModel): Observable<ItemModel> {
    return this.http.post(`${this.baseUrl}`, model) as Observable<ItemModel>;
  }

  update(model: ItemModel): Observable<ItemModel> {
    return this.http.put(`${this.baseUrl}/${model.id}`, model) as Observable<ItemModel>;
  }

  delete(id: number): Observable<ItemModel> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<ItemModel>;
  }
}
