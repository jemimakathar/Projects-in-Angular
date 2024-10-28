import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
// Renderer2 is a powerful tool in Angular for safely and effectively manipulating the DOM.
//  By using this service, developers can create more maintainable and secure applications
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
    const link=this.renderer.createElement('a'); //to create a new <a>
    link.setAttribute('target','_blank'); //set attributes 
    link.setAttribute('href','../../assets/Resume.pdf');//This sets the location of the PDF file to be downloaded.
    link.setAttribute('download','Resume.pdf')//This attribute prompts the browser to download the file instead of navigating to it, with the suggested filename Resume.pdf
    link.click();
    link.remove();//After the click event, the anchor element is removed from the DOM to clean up, ensuring that the DOM remains uncluttered.
  }

}
