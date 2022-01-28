import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Task } from 'src/app/Task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  id: number = 0;
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  Subscription?:Subscription;

  constructor(
    private uiService: UiService
  ) {
    this.Subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)

   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("submit");
    if(this.text.length === 0){
      alert("Please add a task!");
      return
    }
    // deconstruccion de las variables
    const {id,text,day,reminder} = this
    const newTask = {id,text,day,reminder}
    /*
   const newTask = {
     id: this.id,
     text: this.text,
     day: this.day,
     reminder: this.reminder
   }
   */
    this.onAddTask.emit(newTask);

  }
}
