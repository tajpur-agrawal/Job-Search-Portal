import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { JobService } from '../../job.service';
import {CommonModule} from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Job } from '../modal/job';


@Component({
  selector: 'app-jobs-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jobs-home.component.html',
  styleUrl: './jobs-home.component.css'
})



export class JobsHomeComponent implements OnInit {
  jobList: Job[] = [];
  duplicateFlag: boolean = false;
  favList: Job[] = [];
  
  constructor( private jobService: JobService, 
               private elementRef: ElementRef,
               private router: Router,
               private renderer2: Renderer2
  ) {
  }
  ngOnInit() {
    this.getJobList();    
    var local = localStorage.getItem("favJobList");
    this.favList = local? JSON.parse(local): {};
    this.jobService.favouriteList = this.favList
    setTimeout( () => {     
      this.favList.forEach( (data: Job) => {
        let starIdNew=document.getElementById('star-'+data.id);
        starIdNew?.setAttribute("style", "color:yellow;");        
      });
    }, 50);
       
  } 

  
  getJobList() {
    this.jobService.callJobService().subscribe( data => { 
      this.jobList = data;
    });
  }

 
  
  addToFavouriteNew(job: Job, event: Event) {    
    let favClickedElementID = (event.target as HTMLButtonElement).id;
    let favClickedElement = document.getElementById(favClickedElementID)

    this.duplicateFlag = false;
    this.jobService.favouriteList.forEach( (data: Job) => {
         if(data.id === job.id) {
           this.duplicateFlag = true; 
           this.jobService.favouriteList = this.jobService.favouriteList.filter(function (dupData: Job) {
            return dupData !== data;            
          });
        }      
    }); 
    localStorage.setItem('favJobList',JSON.stringify(this.jobService.favouriteList));

    if (this.duplicateFlag === false) {
      this.jobService.favouriteList.push(job)
      localStorage.setItem('favJobList',JSON.stringify(this.jobService.favouriteList));
      favClickedElement?.setAttribute("style", "color:yellow;");
    } else {
      favClickedElement?.setAttribute("style", "color:unset;");
    }    
  }
}
