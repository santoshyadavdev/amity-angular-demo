import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  name = 'Employee Component';

  title = 'Test Title';

  hide = false;

  id = 0;

  todoList : Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.id = this.employeeService.getId();
    this.employeeService.getTodo().subscribe((data)=> this.todoList = data);
  }

  toggle() {
    this.hide = !this.hide;
  }
}
