import { environment } from './../../../environments/environment';
import { Task } from './task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Task[]>(`${environment.api}/api/v1/auth/enderecos`);
  }

  getById(id: string) {
    return this.http.get<Task>(`${environment.api}/api/v1/auth/enderecos/${id}`);
  }

  save(task: Task) {
    const taskBody = {
      nome: task.nome,
      cep: task.cep,
      logradouro: task.logradouro,
      complemento: task.complemento,
      bairro: task.bairro,
      localidade: task.localidade,
      uf: task.uf,
    };

    if (task.id) {
      return this.http.put<Task>(`${environment.api}/api/v1/auth/enderecos/${task.id}`, taskBody);
    } else {
      return this.http.post<Task>(`${environment.api}/api/v1/auth/enderecos`, taskBody);
    }
  }

  delete(id: string) {
    return this.http.delete(`${environment.api}/api/v1/auth/enderecos/${id}`);
  }
}
