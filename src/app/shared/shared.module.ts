import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from './../shared/components/skeleton-loader/skeleton-loader.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ApiService } from './services/api.service';
import { ValidationService } from './services/validation.service';

@NgModule({
  declarations: [SkeletonLoaderComponent, ErrorMessageComponent],
  imports: [CommonModule],
  exports: [SkeletonLoaderComponent, ErrorMessageComponent],
  providers: [ApiService, ValidationService],
})
export class SharedModule {}
