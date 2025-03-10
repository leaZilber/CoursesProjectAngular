import { Routes } from '@angular/router';
import { HomePageComponent } from '../components/homePage/home-page.component';
import { LoginComponent } from '../components/login/login.component';
import { SignUpComponent } from '../components/signUp/sign-up.component';
import { authGuardGuard } from '../Guards/auth-guard.guard';
import { AuthComponent } from '../components/auth/auth.component';
import { CoursesListComponent } from '../components/courses-list/courses-list.component';
import { TeacherPageComponent } from '../components/teacher-page/teacher-page.component';
import { teacherGuard } from '../Guards/teacher.guard';
import { CourseSyllabusComponent } from '../components/course-syllabus/course-syllabus.component';

export const routes: Routes = [

  { path: '', redirectTo: 'homePage', pathMatch: 'full' },
  { path: 'homePage', component: HomePageComponent, canActivate: [authGuardGuard] },
  { path: 'auth', component: AuthComponent },
  { path: 'list', component: CoursesListComponent , canActivate: [authGuardGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'Register', component: SignUpComponent },
  { path: 'teacher', component: TeacherPageComponent, canActivate: [authGuardGuard,teacherGuard] },
  { path: 'CourseSyllabus', component: CourseSyllabusComponent, canActivate: [authGuardGuard] }
  
];
