import { Component,Input } from '@angular/core';
import { Project } from '../_modles/project';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProjectModelComponent } from '../project-model/project-model.component';
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project={} as Project;  //input decorator use panna athu child
  bsModalRef?:BsModalRef;   //not shown always so its in optional 

  constructor(private modalService:BsModalService) //this service is provided by bootstrap and functionality is open and close modal
  {

  }
  openProjectModel()
  {
    this.bsModalRef=this.modalService.show(ProjectModelComponent )
  }
}
