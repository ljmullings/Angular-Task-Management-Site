import { Component } from '@angular/core';
import { Task } from './task.model'; // Assuming task.model.ts is in the same directory
import { RouterOutlet } from '@angular/router';
import {CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass'],
  imports: 
  [RouterOutlet, 
  TasksComponent,
  CommonModule]
})
export class TasksComponent {
  tasks: Task[] = [
    { id: 1, description: 'Learn Angular', completed: false },
    { id: 2, description: 'Build an Angular app', completed: false }
  ];
  constructor() {
    console.log(this.tasks); // Add this line
  }
  addTask(description: string): void {
    const newTask: Task = {
      id: this.tasks.length + 1,
      description: description,
      completed: false
    };
    this.tasks.push(newTask);
  }

  toggleTaskCompletion(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }
}