import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home/home-page.component';
import { LoginPageComponent } from './pages/auth/login/login-page.component';
import { RegisterPageComponent } from './pages/auth/register/register-page.component';
import { MyCvPageComponent } from './pages/my-cv/my-cv-page.component';
import { CvListPageComponent } from './pages/cvs/cv-list/cv-list-page.component';
import { CvDetailsPageComponent } from './pages/cvs/cv-details/cv-details-page.component';
import { CvExportPageComponent } from './pages/cvs/cv-export/cv-export-page.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },

  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/register', component: RegisterPageComponent },

  { path: 'my-cv', component: MyCvPageComponent },

  { path: 'cvs', component: CvListPageComponent },

  // Important order: export before details
  { path: 'cvs/:id/export', component: CvExportPageComponent },
  { path: 'cvs/:id', component: CvDetailsPageComponent },

  { path: '**', component: NotFoundPageComponent }
];
