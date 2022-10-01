import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
       firstname:['',Validators.required],
       lastname:['',Validators.required],
       email:['',[Validators.required,Validators.email]],
       password: ['', [Validators.required, Validators.minLength(8)]],
       cpassword:['',Validators.required]
          
});
}
onSubmit() {
  // stop here if form is invalid
  if (this.registerForm.valid) {
    console.log("valid data", this.registerForm.value);
    console.log("do api call")
    let data = {
      firstName: this.registerForm.value.firstname,
      lastName: this.registerForm.value.lastname,
      emailId: this.registerForm.value.email,
      password: this.registerForm.value.password
     
    }
    this.user.signup(data).subscribe((result: any) => 
    console.log(result))
  }
  else
  {
    console.log("invalid data",this.registerForm.value);
    console.log("no api call");
  }
}

}

