import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalConfiguration } from './modal.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalConfiguration: ModalConfiguration;

  @Output() primaryButtonClick = new EventEmitter();
  @Output() secondaryButtonClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onPrimaryButtonClick() {
    this.primaryButtonClick.emit();
  }

  onSecondaryButtonClick() {
    this.secondaryButtonClick.emit();
  }
}
