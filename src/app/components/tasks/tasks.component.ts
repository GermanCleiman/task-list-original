import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // Creo un array de tipo Task que contiene el valor de TASKS
  tasks: Task[] = [];

  constructor( private taskService: TaskService ) { }

  ngOnInit(): void {
    //Like promise
   this.taskService.getTasks().subscribe( tasks =>
    this.tasks = tasks );
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    })
  }
  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
   this.taskService.addTask(task).subscribe((task)=>{
    console.log(task);
    this.tasks.push(task)}
    )}

}
