import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsFavComponent } from './jobs-fav.component';

describe('JobsFavComponent', () => {
  let component: JobsFavComponent;
  let fixture: ComponentFixture<JobsFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsFavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
