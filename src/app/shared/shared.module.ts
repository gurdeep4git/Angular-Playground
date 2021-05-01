import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from './../shared/components/skeleton-loader/skeleton-loader.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ApiService } from './services/api.service';
import { ValidationService } from './services/validation.service';
import { FullscreenComponent } from './components/fullscreen/fullscreen.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    SkeletonLoaderComponent,
    ErrorMessageComponent,
    FullscreenComponent,
    ConfirmationModalComponent,
  ],
  imports: [CommonModule],
  exports: [
    SkeletonLoaderComponent,
    ErrorMessageComponent,
    FullscreenComponent,
    ConfirmationModalComponent,
  ],
  providers: [ApiService, ValidationService],
})
export class SharedModule {}
