import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.apiservice';
@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  taskform :Array<any>=[];
  
  constructor(private taskService:TaskService) { }
 headers=["TaskId","TaskName","AssignedTo","Startdate","EndDate","Priority"];
  ngOnInit(): void {
   
  }
getTask(){
  const self =this;
  this.taskService.getTasks()
  .subscribe((data:any)=>this.taskform=data);
}

addUpdateTask(){
  const selfs =this;
  this.taskService.addTasks().subscribe((res:any)=>console.log(res));
}
}