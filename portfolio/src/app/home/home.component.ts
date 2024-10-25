import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_modles/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProject ={} as Project


  constructor(private titleService: Title,private service:ProjectsService)
  {
    this.titleService.setTitle('jemima-home')
  }
  ngOnInit(): void {
    this.featuredProject=this.service.getProjectByid(3)
    
  }

}
