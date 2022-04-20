import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerRoutingModule } from './logger-routing.module';
import { LogsComponent } from './logs/logs.component';
import { LogsService } from './logs.service';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LogsComponent],
  imports: [
    CommonModule,
    LoggerRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
})
export class LoggerModule { }
