import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import {CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
    [RouterOutlet, 
    TasksComponent,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'Personal Task Manager';
}
