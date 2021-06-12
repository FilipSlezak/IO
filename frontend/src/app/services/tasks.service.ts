import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Task } from "../interfaces/taskInterface";

@Injectable()
export class TasksService {
    public tasks: BehaviorSubject<Task[]> = new BehaviorSubject([] as Task[]);
    private api_url = '/api';
    constructor(private http: HttpClient) {
        this.fetchTasks();
    }

    fetchTasks() {
        this.http.get<Task[]>(`${this.api_url}/tasks/`).subscribe((data) => this.tasks.next(data));
    }
}