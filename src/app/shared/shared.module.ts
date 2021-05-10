import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from './../shared/components/skeleton-loader/skeleton-loader.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ApiService } from './services/api.service';
import { ValidationService } from './services/validation.service';
import { FullscreenComponent } from './components/fullscreen/fullscreen.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { AuthComponent } from './components/auth/auth.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SkeletonLoaderComponent,
    ErrorMessageComponent,
    FullscreenComponent,
    ConfirmationModalComponent,
    AuthComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, TabsModule.forRoot()],
  exports: [
    SkeletonLoaderComponent,
    ErrorMessageComponent,
    FullscreenComponent,
    ConfirmationModalComponent,
    AuthComponent,
    NotFoundComponent,
  ],
  providers: [ApiService, ValidationService],
})
export class SharedModule {}
