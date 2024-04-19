import { Routes } from '@angular/router';
import { JobsHomeComponent } from './jobs-home/jobs-home.component';
import { JobsFavComponent } from './jobs-fav/jobs-fav.component';
import { JobDetailsComponent } from './job-details/job-details.component';

export const routes: Routes = [
    { path: '', component: JobsHomeComponent },
    { path: 'home', component: JobsHomeComponent },
    { path: 'fav', component: JobsFavComponent },
    { path: 'details', component: JobDetailsComponent },
  ];
