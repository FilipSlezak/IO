import { Component, Input } from '@angular/core';
import { Task } from "../../interfaces/taskInterface";

@Component({
  selector: 'app-task-card',
  templateUrl: './taskCard.component.html',
  styleUrls: ['./taskCard.component.scss']
})
export class TaskCardComponent {
  @Input() task: Task | undefined;
}
