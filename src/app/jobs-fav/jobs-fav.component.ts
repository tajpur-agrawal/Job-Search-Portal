import { Component } from '@angular/core';
import { JobService } from '../../job.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-jobs-fav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jobs-fav.component.html',
  styleUrl: './jobs-fav.component.css'
})
export class JobsFavComponent {
  favouriteList:any=[];
  constructor(private jobService: JobService) {

  }

  ngOnInit() {
    this.favouriteList = [];
    var local = localStorage.getItem("favJobList");

    this.favouriteList = local? JSON.parse(local): {};
    
  }

  
}
