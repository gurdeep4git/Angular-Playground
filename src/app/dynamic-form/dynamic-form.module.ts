import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { FriendsComponent } from './friends/friends.component';
import { JobFormComponent } from './job-form/job-form.component';
import { PersonalInfoComponent } from './job-form/personal-info/personal-info.component';
import { ExperienceComponent } from './job-form/experience/experience.component';
import { EducationComponent } from './job-form/education/education.component';
import { SkillsComponent } from './job-form/skills/skills.component';


@NgModule({
  declarations: [FriendsComponent, JobFormComponent, PersonalInfoComponent, ExperienceComponent, EducationComponent, SkillsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormRoutingModule
  ]
})
export class DynamicFormModule { }
