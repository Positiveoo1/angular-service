import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  tasks = [
    { id: 1, task: 'task1' },
   
  ];

  addTask(task: string): void {
    const newTask = {
      id: this.tasks.length + 1,
      task: task
    };
    this.tasks.push(newTask);
  }

}
