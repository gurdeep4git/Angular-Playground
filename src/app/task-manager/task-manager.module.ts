import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskManagerService } from "./task-manager.service";
import { ManagerComponent } from './manager/manager.component';
import { ListComponent } from './manager/list/list.component';
import { TaskComponent } from './manager/task/task.component';

@NgModule({
  declarations: [ManagerComponent, ListComponent, TaskComponent],
  imports: [
    CommonModule,
    TaskManagerRoutingModule
  ],
  providers: [TaskManagerService]
})
export class TaskManagerModule { }
