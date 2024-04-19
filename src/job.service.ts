import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class JobService {

  favouriteList: any=[];
  favIDs: any=[];

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
