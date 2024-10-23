import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-model',
  templateUrl: './project-model.component.html',
  styleUrls: ['./project-model.component.css']
})
export class ProjectModelComponent {
  constructor(public bsModalRef:BsModalRef)
  {
    

  }
}
