import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerRoutingModule } from './logger-routing.module';
import { LogsComponent } from './logs/logs.component';
import { LogsService } from './logs.service';

@NgModule({
  declarations: [LogsComponent],
  imports: [
    CommonModule,
    LoggerRoutingModule
  ],
})
export class LoggerModule { }
