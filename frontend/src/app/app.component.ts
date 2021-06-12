import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TasksService } from './services/tasks.service';
import { Task } from "./interfaces/taskInterface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  public tasks: Task[] = [];
  private subscriptions: Subscription = new Subscription();
  constructor(private tasksService: TasksService) {}
  public pullTasks(): void {}
  ngOnInit(): void {
    this.subscriptions.add(this.tasksService.tasks.subscribe(tasks => this.tasks = tasks));
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
