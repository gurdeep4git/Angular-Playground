import { Component, OnInit } from '@angular/core';

import { TaskManagerService } from '../task-manager.service';
import { Task, TaskList } from "../../shared/models/task-manager";
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  taskList: TaskList[];
  tasks: Task[];
  activeTaskListId: number;

  constructor(private taskManagerService: TaskManagerService) { }

  ngOnInit(): void {
    this.taskManagerService
      .getTaskList()
      .pipe(
        tap((list: TaskList[]) => {
          this.activeTaskListId = list.filter(l => l.isActive)[0].id;
        })
      ).subscribe((list: TaskList[]) => {
        this.taskList = list;
        this.getTasks(this.activeTaskListId);
      })
  }

  getTasks(id: number) {
    this.taskManagerService.getTasks(id)
      .subscribe((tasks: Task[]) => {
        this.tasks = tasks
      })
  }

  onTaskListClick(id: number) {
    this.setActiveTaskList(id);
    this.getTasks(id);
  }

  setActiveTaskList(id: number) {
    this.taskList.forEach(l => {
      l.isActive = false;
      if (l.id === id) {
        l.isActive = true;
      }
    });
  }

}
