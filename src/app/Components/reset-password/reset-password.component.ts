import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm !: FormGroup
  constructor(private formBuilder:FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.resetForm=this.formBuilder.group({
      newpassword: ['', [Validators.required,Validators.minLength(8)]],
      cnewpassword: ['',Validators.required]
    });
  }
  onSubmit(){
    if (this.resetForm.valid) {
      console.log("valid data", this.resetForm.value);
      console.log("do api call")
    }
    else {
      console.log('invalid data', this.resetForm.value);
      console.log("no api call")
    }
  }
}
