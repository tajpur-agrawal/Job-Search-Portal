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
  duplicateFlag: boolean = false;
  
  constructor( private jobService: JobService, 
               private elementRef: ElementRef,
               private router: Router,
               private renderer2: Renderer2
  ) {
  }
  ngOnInit() {
    this.getJobList();

    // setTimeout(() => {
    //   this.jobService.favIDs.forEach((element: any) => {
    //     let starId=document.getElementById(element);
    //     starId?.setAttribute('id', 'favStar');
    //   });
    // }, 500);


    setTimeout( () => {
      this.jobService.favouriteList.forEach( (data: any) => {
        let starIdNew=document.getElementById('star-'+data.id);
        starIdNew?.setAttribute("style", "color:yellow;");        
      });
    }, 50);
       
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

  
  addToFavouriteNew(job: any, event: any) {
    let favClickedElementID = event.srcElement.id;
    let favClickedElement = document.getElementById(favClickedElementID)
    
    this.duplicateFlag = false;
    this.jobService.favouriteList.forEach( (data: any) => {
         if(data.id === job.id) {
           this.duplicateFlag = true; 
           this.jobService.favouriteList = this.jobService.favouriteList.filter(function (dupData: any) {
            return dupData !== data;            
          });
        }      
    }); 

    if (this.duplicateFlag === false) {
      this.jobService.favouriteList.push(job)
      favClickedElement?.setAttribute("style", "color:yellow;");
    } else {
      favClickedElement?.setAttribute("style", "color:unset;");
    }    
  }
}
