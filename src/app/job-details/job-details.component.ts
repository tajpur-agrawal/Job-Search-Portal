import { Component } from '@angular/core';
import { JobService } from '../../job.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { map } from 'rxjs';
import { JobDetails } from '../modal/job-detail';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})

export class JobDetailsComponent {
  jobId: string = '';
  jobDetails: JobDetails = {};
  origin: string = '';
  
  constructor(private jobService: JobService, 
              private activatedRoute: ActivatedRoute,
              private router: Router                
              ) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
      .subscribe(state => {
        this.jobId = state && state.id;
        this.origin = state && state.origin;
        
    });


    this.getJobDetails();
  }

  getJobDetails() {
    this.jobService.callJobDetailsWithId(this.jobId).subscribe( data => { 
      this.jobDetails = data;      
      
  
    });
  }

  clickBackBtn() {
    this.router.navigate([this.origin]);
  }

}
