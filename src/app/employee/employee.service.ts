import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getId() {
    return 1;
  }

  getTodo() {
    return this.http.get<Employee[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
