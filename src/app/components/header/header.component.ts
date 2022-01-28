import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../service/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'My Task List';
  showAddTask: boolean = true;
  subscription?: Subscription;

  constructor(
    private UiService: UiService
  ) {
    this.subscription = this.UiService.onToggle().subscribe(value => this.showAddTask = value)
   }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.UiService.toggleAddTask();
  }

}
