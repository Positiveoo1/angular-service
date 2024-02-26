import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  providers: [EmployeeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'routing';

  name: string = '';
  surName: string = '';
  age: string = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  addUser(): void {
    const task = `${this.name} ${this.surName} ${this.age}`;
    this.employeeService.addTask(task);
    console.log('Tasks:', this.employeeService.tasks);
    this.clearInputs();
  }

  clearInputs(): void {
    this.name = '';
    this.surName = '';
    this.age = '';
  }

 
  
}
