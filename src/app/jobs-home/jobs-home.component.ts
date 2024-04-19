import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { JobService } from '../../job.service';
import {CommonModule} from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-jobs-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jobs-home.component.html',
  styleUrl: './jobs-home.component.css'
})



export class JobsHomeComponent implements OnInit {
  jobList: any;
  
  constructor( private jobService: JobService, 
               private elementRef: ElementRef,
               private router: Router,
               private renderer2: Renderer2
  ) {
  }
  ngOnInit() {
    this.getJobList();
    console.log('Anuj in ngOnInit');

    setTimeout(() => {
      this.jobService.favIDs.forEach((element: any) => {
        let starId=document.getElementById(element);
        starId?.setAttribute('id', 'favStar');
      });
    }, 500);
       
  } 

  ngAfterViewChecked() {
    // this.jobService.favIDs.forEach((element: any) => {
    //   let starId=document.getElementById(element);
    //   starId?.setAttribute('id', 'favStar');
    // });
  }
  
  getJobList() {
    this.jobService.callJobService().subscribe( data => { 
      this.jobList = data;
    });
  }

  addToFavourite(job: any, event: any) {

    let elementId = event.srcElement.id;
    this.jobService.favouriteList.push(job);
    
    localStorage.setItem('favJobList',JSON.stringify(this.jobService.favouriteList))
   
    this.toggleStar(job, elementId);
  }

  toggleStar(job: any, elementId: any) {
    
    let starId=document.getElementById(elementId);
    
    if(elementId!='favStar'){      
          starId?.setAttribute('id', 'favStar');
    }
    else {      
      starId?.setAttribute('id', job.id);
    }

    this.jobService.favIDs.push(job.id);
  }

  
  

}
