import { Component, Input, OnInit } from '@angular/core';
import { TaskManagerService } from '../../task-manager.service';
import { Task } from "../../../shared/models/task-manager";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() tasks: Task[];

  constructor(private taskManagerService: TaskManagerService) {

  }

  ngOnInit(): void {

  }

}
