//serivces-services are commonly used to fetch datas from api endpoints and then supply the data to components to use.

import { Injectable } from '@angular/core';
import { Project } from '../_modles/project';
import { Tag } from '../_modles/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[]=[
    {id:0,name:'Python Project',summary:'This python project analyzes stock market data.',description:"It helps in our Future",projectLink:"//www.github.com",tags:[Tag.PYTHON],pictures:[]},
    {id:1,name:'Angular Project',summary:'This Angular project analyzes stock market data.',description:"It helps in our Surrounding",projectLink:"//www.github.com",tags:[Tag.ANGULAR],pictures:[] },
    {id:2,name:'TypeScript App Project',summary:'This Typescript project analyzes stock market data.',description:"It helps in our Daily life",projectLink:"//www.github.com",tags:[Tag.TYPESCRIPT],pictures:[] }
  ];
 

  constructor() { }

  GetProjects()
  {
    return this.projects;
  }
  getProjectByid(id:number):Project{
    let project =this.projects.find(project=>project.id===id);
    if(project === undefined)
    {
      throw new TypeError("there is no project that matches the id:"+id);
    }
    return project;
  }
}
