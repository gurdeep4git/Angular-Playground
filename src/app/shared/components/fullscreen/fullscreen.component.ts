import {
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FullscreenService } from '../../services/fullscreen.service';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss'],
})
export class FullscreenComponent implements OnInit, OnDestroy {
  @Input() htmlTemplate: TemplateRef<ElementRef>;
  @Output('fullscreenSubmit') fullscreenSubmit = new EventEmitter();

  constructor(private fullscreenService: FullscreenService) {}

  ngOnInit(): void {}

  close() {
    this.fullscreenService.hide();
  }

  onFullscreenSubmit(): void {
    this.fullscreenSubmit.emit();
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }
}
