import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';


const routes: Routes = [

  {path:'verify', component: OtpVerifyComponent},
  {path:'register', component: RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'',component:HomepageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [RegistrationComponent,LoginComponent,HomepageComponent,OtpVerifyComponent]