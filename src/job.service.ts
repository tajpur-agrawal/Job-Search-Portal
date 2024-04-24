import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { Job } from './app/modal/job';
import { JobDetails } from './app/modal/job-detail';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  favouriteList: Job[] =[];
  // favouriteList: any;
  favIDs: string[]=[];

  constructor( private httpClient: HttpClient) { }

  callJobService(): Observable<Job[]> {    
    return this.httpClient.get<Job[]>('/jobs');
  }
 
  callJobDetailsWithId(id: string): Observable<JobDetails> {  
    return this.httpClient.get<JobDetails>(`/jobs/${id}`);
  }

  
}
