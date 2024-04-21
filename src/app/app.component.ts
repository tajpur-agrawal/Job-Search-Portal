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

  constructor(private router: Router) {
    
  }
  ngOnInit() {
    localStorage.setItem('favJobList',JSON.stringify(''))
  }

  clickJobsTab() {
    this.router.navigate(['/home']);

  }
  clickFavTab() {
    this.router.navigate(['/fav']);
  }
}
