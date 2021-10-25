import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskManagerService } from '../../task-manager.service';
import { TaskList } from "../../../shared/models/task-manager";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() taskList: TaskList[];
  @Output() taskListClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }

  onTaskListClick(id: number) {
    this.taskListClick.emit(id);
  }

}
