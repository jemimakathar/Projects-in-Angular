import { Component } from '@angular/core';
import { OnInit } from '@angular/core';//OnInit --initialize the variable
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  taskArray=[{taskName:"Brush Teeth",isCompleted:false}];

 constructor(){

 
} 
ngOnInit(): void {
    
  }




  OnSubmit(form:NgForm)//template-driven form
  {
  console.log(form);
  //add another task
  this.taskArray.push({                            
    taskName:form.controls['task'].value,   //two way binding
    isCompleted:false
  })

  }


  onDelete(index:number)
  {
    this.taskArray.splice(index,1);
  }


}
