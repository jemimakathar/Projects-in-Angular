import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeFrom?:FormGroup;
  Employobj:EmployeeModel=new EmployeeModel()
  constructor(){
    this.createForm()
  }

  createForm()
  {
    this.employeeFrom=new FormGroup
    ({
      EmpId:new FormControl(this.Employobj.empId),
      pincode:new FormControl(this.Employobj.pincode),

    })
  }
  
}
