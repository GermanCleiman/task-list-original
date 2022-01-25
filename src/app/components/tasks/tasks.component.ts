import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // Creo un array de tipo Task que contiene el valor de TASKS
  tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
