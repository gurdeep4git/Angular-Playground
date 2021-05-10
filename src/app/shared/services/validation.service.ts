import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      required: 'This is a required field',
      invalidEmail: 'Please enter a valid email',
      shouldSameError: 'Password didnt match',
      invalidPassword:
        'Invalid password. Password must be at least 6 characters long, and contain a number.',
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

  email(control: FormControl) {
    const regex = /^\w(\w|[\.-])+@\w+\.[a-zA-Z]{2,}$/;
    if (regex.test(control.value)) {
      return null;
    } else {
      return { invalidEmail: true };
    }
  }

  password(control) {
    const regex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/;
    if (regex.test(control.value)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }

  shouldSame = (
    sourceControlName: string,
    targetControlName: string,
    message: string = null
  ): ((group: FormGroup) => ValidationErrors) => {
    return (group: FormGroup): ValidationErrors => {
      const source = group.get(sourceControlName) ?? null;
      const target = group.get(targetControlName) ?? null;

      if (source.value !== target.value) {
        const error = this.shouldSameError(
          sourceControlName,
          targetControlName,
          message
        );
        return error;
      } else {
        return null;
      }
    };
  };

  shouldSameError: (
    sourceControlName: string,
    targetControlName: string,
    message: string
  ) => ValidationErrors = (
    sourceControlName: string,
    targetControlName: string,
    message: string = null
  ) => {
    const errorMessage =
      message ?? `${targetControlName} and ${sourceControlName} are different`;
    return { shouldSameError: { message: errorMessage } };
  };
}
