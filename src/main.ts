import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {provideRouter, Routes } from "@angular/router";
import {Projects} from './app/projects/projects';
import {Contact} from './app/contact/contact';
import {About} from './app/about/about';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact }
]

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
