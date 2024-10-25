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
  typescript:boolean=false; //(intial aah value false aa irrukanum checkbox click aagama)
  angular:boolean=false;
  java:boolean=false;
  csharp:boolean=false;
  python:boolean=false;
  filtering:boolean=false;
 

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
  


  Filter()
  {
    let filterTags:Tag[]=[];

    if(this.typescript)
    {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular)
      {
        filterTags.push(Tag.ANGULAR);
      }
      if(this.python)
        {
          filterTags.push(Tag.PYTHON);
        }
      if(this.csharp)
        {
          filterTags.push(Tag.CSHARP);
        }
      if(this.java)
        {
          filterTags.push(Tag.JAVA);
        }


        if(this.typescript ||this.angular || this.python || this.csharp || this.java){
          this.filtering=true;
        }
        else{
          this.filtering=false;
        }


    this.projects=this.projectService.GetprojectsByFilter(filterTags);   
  }

  ResetFilters()
  {
    this.typescript=false;
    this.java=false;
    this.python=false;
    this.angular=false;
    this.csharp=false;
    this.filtering=false;



    this.projects=this.projectService.GetProjects();
  }
}

