import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";
import {Data} from "@angular/router";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-root',
  template: `
    <button (click)="createTask()">Create Task</button>
<!--    <router-outlet></router-outlet>-->
  `,
  providers: [TasksService]
})

export class AppComponent implements OnInit{
  name: string = 'Bob';

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService.getTasks().subscribe(result => console.log(result))
  }

  createTask() {
    this.tasksService.createTask({text: 'test3', isCheck: true}).subscribe(result => console.log(result))
  }
}
