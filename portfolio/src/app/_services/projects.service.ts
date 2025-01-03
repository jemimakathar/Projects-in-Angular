//serivces-services are commonly used to fetch datas from api endpoints and then supply the data to components to use.

import { Injectable } from '@angular/core';
import { Project } from '../_modles/project';
import { Tag } from '../_modles/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[]=[
    {id:0,name:'Python Project',summary:'This python project analyzes stock market data.',description:"It helps in our Future",projectLink:"https://github.com/jemimakathar",tags:[Tag.PYTHON,Tag.NODEJS],pictures:["../../assets/certificate.png","../../assets/certificate1.png","../../assets/certificate2.png"],f_picture:["../../assets/Python_Projects_for_begginers.jpg"]},
    {id:1,name:'Angular Project',summary:'This Angular project analyzes stock market data.',description:"It helps in our Surrounding",projectLink:"https://github.com/jemimakathar",tags:[Tag.ANGULAR,Tag.ASPNET],pictures:["../../assets/certificate.png","../../assets/certificate1.png","../../assets/certificate2.png,"],f_picture:["../../assets/angular.jpg"] },
    {id:2,name:'TypeScript App Project',summary:'This Typescript project analyzes stock market data.',description:"It helps in our Daily life",projectLink:"https://github.com/jemimakathar",tags:[Tag.TYPESCRIPT],pictures:["../../assets/certificate.png","../../assets/certificate1.png","../../assets/certificate2.png"],f_picture:["../../assets/typescript.webp"]},
    {id:3,name:'Java App Project',summary:'This Java project analyzes stock market data.',description:"It helps in our rotuine life",projectLink:"https://github.com/jemimakathar",tags:[Tag.JAVA,Tag.TYPESCRIPT],pictures:["../../assets/certificate.png","../../assets/certificate1.png","../../assets/certificate2.png"],f_picture:["../../assets/java.jpg"]},
    {id:4,name:'Nodejs App Project',summary:'This Java project analyzes stock market data.',description:"It helps in our rotuine life",projectLink:"https://github.com/jemimakathar",tags:[Tag.NODEJS,Tag.JAVA],pictures:["../../assets/certificate.png","../../assets/certificate1.png","../../assets/certificate2.png"],f_picture:["../../assets/nodejs.jpg"]},
    {id:5,name:'Aspnet App Project',summary:'This Java project analyzes stock market data.',description:"It helps in our rotuine life",projectLink:"https://github.com/jemimakathar",tags:[Tag.ASPNET],pictures:["../../assets/certificate.png","../../assets/certificate1.png","../../assets/certificate2.png"] ,f_picture:["../../assets/asp.net.jpg"]},
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





  GetprojectsByFilter(filterTags:Tag[])
  {
    let filteredProjects:Project[]=[];

    this.projects.forEach(function(pro)
  {
    let foundAll=true;

    filterTags.forEach(function(tag)
  {
    if(pro.tags.includes(tag)==false)
    {
      foundAll=false;
    }
  });

  if(foundAll)
  {
    filteredProjects.push(pro)
  }
  });
  return filteredProjects;
  }
}
