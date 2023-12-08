import { Component , ChangeDetectionStrategy} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  title = 'new-crud';
  showhome:boolean=false;
  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {
    this.showhome=true;
  }

  hidehome(): void {
    this.showhome=false;
  }

  loginForm = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required, Validators.minLength(6)],
    email:['',Validators.email]
  });

  onSubmit() {

  }

}
