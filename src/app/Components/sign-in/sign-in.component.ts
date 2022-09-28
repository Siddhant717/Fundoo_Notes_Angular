import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signinForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  onSubmit() {
    // stop here if form is invalid
    if (this.signinForm.valid) {
      console.log("valid data", this.signinForm.value);
      console.log("do api call");
      let data = {
       
        emailId: this.signinForm.value.email,
        password: this.signinForm.value.password
      }
      this.user.signin(data).subscribe((result: any) => {console.log(result.token),
      localStorage.setItem('token',result.token)}
      )
    }
      else {
        console.log('invalid data', this.signinForm.value);
        console.log("no api call")
      }

    }
  }