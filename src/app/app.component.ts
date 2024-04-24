import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ng-job-search';
  active = false;
  firstTab: string = '';
  secondTab: string = '';

  constructor(private router: Router) {
    
  }
  ngOnInit() {
    this.router.events.subscribe((val) => {
      const currentPage = this.router.url; 
      if (currentPage === '/home') {
        this.firstTab ='active';
        this.secondTab = '';
      } else if(currentPage === '/fav'){
        this.firstTab ='';
        this.secondTab = 'active';
      } else {
        this.firstTab ='active';
        this.secondTab = '';
      }
   });   
  }

  clickJobsTab() {
    this.router.navigate(['/home']);

  }
  clickFavTab() {
    this.router.navigate(['/fav']);
  }
}
