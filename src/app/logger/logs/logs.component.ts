import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalConfiguration } from '../../shared/components/modal/modal.model'

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  isModalShown: boolean;
  jiraForm: FormGroup;
  modalConfiguration: ModalConfiguration;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.jiraForm = this.fb.group({
      test: new FormControl('', [Validators.required])
    })
  }

  openModal(): void {
    this.modalConfiguration = new ModalConfiguration('Add Form', 'Save', 'Close');
    this.isModalShown = true;
  }

  onSecondaryButtonClick() {
    this.isModalShown = false;
    this.initForm();
  }

  onPrimaryButtonClick(form) {
    if (!this.jiraForm.valid) {
      this.showErrors();
      return;
    }

    console.log(form);
  }

  private showErrors() {
    this.jiraForm.get('test').markAsDirty();
    this.jiraForm.get('test').markAsTouched();
  }
}
