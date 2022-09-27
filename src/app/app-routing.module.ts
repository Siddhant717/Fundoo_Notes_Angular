import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './Components/archive/archive.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { GetAllComponent } from './Components/get-all/get-all.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { TrashComponent } from './Components/trash/trash.component';

const routes: Routes = [
  {path:"signup",component:RegisterComponent},
  {path:"signin",component:SignInComponent},
  {path:"forgotpassword",component:ForgotComponent},
  {path:"resetpassword",component:ResetPasswordComponent},
  {path:"dashboard",component:DashboardComponent,
children:[
  {path:"notes",component: GetAllComponent},
  {path:"archive",component: ArchiveComponent},
  {path:"trash",component: TrashComponent}
]

  
}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
