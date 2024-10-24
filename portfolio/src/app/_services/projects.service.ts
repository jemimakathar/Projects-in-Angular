//serivces-services are commonly used to fetch datas from api endpoints and then supply the data to components to use.

import { Injectable } from '@angular/core';
import { Project } from '../_modles/project';
import { Tag } from '../_modles/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[]=[
    {id:0,name:'Python Project',summary:'This python project analyzes stock market data.',description:"It helps in our Future",projectLink:"https://github.com/jemimakathar",tags:[Tag.PYTHON],pictures:["../../assets/certificate.png","../../assets/certificate1.png","../../assets/certificate2.png"]},
    {id:1,name:'Angular Project',summary:'This Angular project analyzes stock market data.',description:"It helps in our Surrounding",projectLink:"https://github.com/jemimakathar",tags:[Tag.ANGULAR],pictures:["../../assets/certificate.png","../../assets/certificate1.png","../../assets/certificate2.png,"] },
    {id:2,name:'TypeScript App Project',summary:'This Typescript project analyzes stock market data.',description:"It helps in our Daily life",projectLink:"https://github.com/jemimakathar",tags:[Tag.TYPESCRIPT],pictures:["../../assets/certificate.png","../../assets/certificate1.png","../../assets/certificate2.png"]},
    {id:3,name:'Java App Project',summary:'This Java project analyzes stock market data.',description:"It helps in our rotuine life",projectLink:"https://github.com/jemimakathar",tags:[Tag.JAVA],pictures:["../../assets/certificate.png","../../assets/certificate1.png","../../assets/certificate2.png"]},
    {id:3,name:'Nodejs App Project',summary:'This Java project analyzes stock market data.',description:"It helps in our rotuine life",projectLink:"https://github.com/jemimakathar",tags:[Tag.NODEJS],pictures:["../../assets/certificate.png","../../assets/certificate1.png","../../assets/certificate2.png"]},
    {id:3,name:'Aspnet App Project',summary:'This Java project analyzes stock market data.',description:"It helps in our rotuine life",projectLink:"https://github.com/jemimakathar",tags:[Tag.ASPNET],pictures:["../../assets/certificate.png","../../assets/certificate1.png","../../assets/certificate2.png"] },
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
