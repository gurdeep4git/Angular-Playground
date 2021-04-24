import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      required: 'This is a required field',
    };

    return config[validatorName];
  }

  required(control: FormControl) {
    const isEmpty = ['', null, undefined].includes(control.value);
    if (!isEmpty || `${control.value}`.trim().length !== 0) {
      return null;
    } else {
      return { required: true };
    }
  }
}
