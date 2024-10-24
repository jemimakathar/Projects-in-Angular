import { Component,Input } from '@angular/core';
import { Project } from '../_modles/project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
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
     // In Bootstrap, the modal component is used to create pop-up dialogs that can display content, forms, or alerts.
    // The ModalOptions interface specifies various properties that can be set to configure a modal instance. By using this interface, you ensure type safety and clarity in your code.
   
    const modalOptions:ModalOptions={
      class:"modal-lg",    //adding additional css 
      initialState:{
        projects:this.project       //show the data at initial state -- to share the components between project-card to project-model
      }
    };
    this.bsModalRef=this.modalService.show(ProjectModelComponent,modalOptions)//show() is bulid in method in modalServices
    
  }
}
