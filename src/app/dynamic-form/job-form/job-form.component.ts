import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { JobApplication, JobForm } from './models/job-application.model';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss'],
})
export class JobFormComponent implements OnInit {
  jobForm: FormGroup;
  isSubmitted: boolean;

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.jobForm = this.fb.group({
      personalInfo: this.fb.group({
        name: ['', [Validators.required]],
        email: [''],
        phone: [''],
        address: [''],
      }),
      experience: this.fb.group({
        companyName: [''],
        totalExp: [''],
      }),
      education: this.fb.group({
        qualification: [''],
        institution: [''],
        year: [''],
      }),
      skills: this.fb.array([this.initSkills()]),
    });
  }

  get skills() {
    return this.jobForm.get('skills') as FormArray;
  }

  initSkills() {
    return this.fb.group({
      skillName: [''],
    });
  }

  onAddSkill() {
    this.skills.push(this.initSkills());
  }

  onDeleteSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit(data: JobForm) {
    this.isSubmitted = true;
    if (!this.jobForm.valid) {
      this.validateAllFormFields(this.jobForm);
    } else {
      this.mapDTO(data);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  mapDTO(data: JobForm) {
    const { personalInfo, education, experience, skills } = data;

    const application = new JobApplication();
    application.name = personalInfo.name;
    application.email = personalInfo.email;
    application.phone = personalInfo.phone;
    application.address = personalInfo.address;

    application.companyName = experience.companyName;
    application.totalExperience = experience.totalExp;

    application.qualification = education.qualification;
    application.institution = education.institution;
    application.graduateYear = education.year;

    if (skills.length > 0) {
      application.skills = skills.map((s) => s.skillName);
    }

    localStorage.setItem('jobApplication', JSON.stringify(application));
  }
}
