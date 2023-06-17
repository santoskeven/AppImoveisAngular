import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { SignupComponent } from './telas/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterGuardService } from './services/router-guard.service';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: SignupComponent},
  // {path: 'dashboard', component: DashboardComponent}
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [RouterGuardService],
    data:{
      expectedRole:['admin', 'user']
    }
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
