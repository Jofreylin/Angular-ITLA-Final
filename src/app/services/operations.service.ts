import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOperations, ITypeOperation } from '../models/operations';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  private readonly baseUrl = environment.api_url;

  constructor(private httpClient: HttpClient) { }

  getOperations():Observable<IOperations[]>{
    return this.httpClient.get<IOperations[]>(`${this.baseUrl}/operations`);
  }

  getTypesOperation():Observable<ITypeOperation[]>{
    return this.httpClient.get<ITypeOperation[]>(`${this.baseUrl}/typeOperation`);
  }

  postOperation(model: IOperations){
    return this.httpClient.post(`${this.baseUrl}/operations`,model);
  }

  deleteOperation(id:number){
    return this.httpClient.delete(`${this.baseUrl}/operations/${id}`);
  }

  updateOperation(model:IOperations){
    return this.httpClient.put(`${this.baseUrl}/operations/${model.id}`,model);
  }

}
