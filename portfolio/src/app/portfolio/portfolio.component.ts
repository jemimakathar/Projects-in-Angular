import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_modles/project';
import { Tag } from '../_modles/Tag';
import { ProjectsService } from '../_services/projects.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projects={} as Project[]; //projects:project[]=[]

  isCollapsed:boolean=true;
 
  constructor(public titleService:Title,private projectService:ProjectsService)
  {
    this.titleService.setTitle('jemima-portfolio')
  }
  ngOnInit(): void {
    this.projects=this.projectService.GetProjects();
  }

  //how to call getProjectByid() method
  // ngOnInit(): void {
  //   const project=this.projectService.getProjectByid(1);
  //   this.projects=[project];
  
}

