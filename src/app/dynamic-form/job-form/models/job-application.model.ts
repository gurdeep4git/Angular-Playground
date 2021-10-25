export class JobApplication {
  name: string;
  email: string;
  phone: string;
  address: string;
  companyName: string;
  totalExperience: number;
  qualification: string;
  institution: string;
  graduateYear: number;
  skills: string[] = [];
}

export class JobForm {
  personalInfo: PersonalInfo;
  education: Education;
  experience: Experience;
  skills: Skill[];
}

interface Skill {
  skillName: string;
}

interface Experience {
  companyName: string;
  totalExp: number;
}

interface Education {
  institution: string;
  qualification: string;
  year: number;
}

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}
