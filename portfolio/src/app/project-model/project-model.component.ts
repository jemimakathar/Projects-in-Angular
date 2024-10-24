import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_modles/project';

@Component({
  selector: 'app-project-model',
  templateUrl: './project-model.component.html',
  styleUrls: ['./project-model.component.css']
})



export class ProjectModelComponent {

   projects= {} as Project;
  constructor(public bsModalRef:BsModalRef)
  {
  }

}
