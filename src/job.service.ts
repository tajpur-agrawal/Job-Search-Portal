import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { Job } from './app/modal/job';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  favouriteList: Job[] =[];
  favIDs: string[]=[];

  constructor( private httpClient: HttpClient) { }

  callJobService(): Observable<any> {    
    return this.httpClient.get('/jobs');
  }
 
  callJobDetailsWithId(id: string): Observable<any> {  
    return this.httpClient.get(`/jobs/${id}`);
  }

  updateFavList() {
   
  }
}
