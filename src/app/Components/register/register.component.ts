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
       password:['',Validators.required,Validators.minLength(8)],
       cpassword:['',Validators.required],
          
})
}
onSubmit(){
  if(this.registerForm.valid){
    console.log("valid data",this.registerForm.value);
    console.log("Do api call");
  }else{
    console.log("invalid data",this.registerForm.value);
    console.log("no api call ");
  }

 }

}