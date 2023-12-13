import { Component , ChangeDetectionStrategy} from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  title = 'new-crud';
  loginForm : FormGroup;
  submitted=false;
  //passwordValidator: any | string;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    ){ }

  ngOnInit(): void {
   // this.showhome=true;
   this.loginForm=this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8),]],
  });;
  }
  passwordValidator(control: { value: any; }) {
    const value = control.value;

    // Password must contain at least one uppercase letter, one special character, and one number
    const hasUppercase = /[A-Z]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasNumber = /\d/.test(value);

    const isValid = hasUppercase && hasSpecialCharacter && hasNumber;

    return isValid ? null : { passwordRequirements: true };
  }


  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value)
    if (this.loginForm.invalid) {
      return;
    }

   // console.log(JSON.stringify(this.loginForm.value, null, 2));
  }

  }

  
  

  
