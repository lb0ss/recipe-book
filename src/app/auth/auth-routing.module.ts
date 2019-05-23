import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { AuthComponent } from "./auth.component";


const authRoutes: Routes = [
    { path: '', component: AuthComponent, children:
    [
      { path: 'signup', component: SignupComponent},
      { path: 'signin', component: SigninComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {

}

