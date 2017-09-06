import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

import { WebHomeComponent }  from './webhome/webhome.component';
import { AssessmentsComponent }  from './assessments/assessments.component';
import { NewEnrollmentsComponent }  from './newenrollments/newenrollments.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
	{ path: 'webhome', component: WebHomeComponent },
	{ path: 'assessments', component: AssessmentsComponent },
	{ path: 'newenrollments', component: NewEnrollmentsComponent },
	{ path: 'newenrollments/:person', component: NewEnrollmentsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
