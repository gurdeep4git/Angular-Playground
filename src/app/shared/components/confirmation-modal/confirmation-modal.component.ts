import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmationModalConfiguration } from '../../models/confirmationModal.model';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent implements OnInit {
  title: string;
  primaryButtonTitle: string;
  secondaryButtonTitle: string;
  callback: any;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {}

  onDelete() {
    this.callback();
  }
}
