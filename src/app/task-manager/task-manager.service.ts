import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/services/api.service';

@Injectable()
export class TaskManagerService {

  private _activeTaskListId: number;

  constructor(private apiService: ApiService) { }

  set activeTaskListId(id: number) {
    this._activeTaskListId = id;
  }

  get activeTaskListId() {
    return this._activeTaskListId
  }

  getTaskList(): Observable<any> {
    return this.apiService.get(`/taskList`);
  }

  getTasks(id: number): Observable<any> {
    return this.apiService.get(`/tasks?taskListId=${id}`);
  }
}
