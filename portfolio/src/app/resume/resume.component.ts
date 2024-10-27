import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(public titleService:Title,private renderer:Renderer2)
  {
    this.titleService.setTitle('jemima-Resume');
  }
  DownloadPdf()
  {
    const link=this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','../../assets/Resume.pdf');
    link.setAttribute('download','')
    link.click();
    link.remove();
  }

}
