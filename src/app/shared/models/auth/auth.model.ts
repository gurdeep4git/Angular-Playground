export class SignUp {
  id: number;
  name: string;
  email: string;
  password: string;
  imageUrl?: string;
}

export class SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export class LoginData {
  loginEmail: string;
  loginPassword: string;
}
