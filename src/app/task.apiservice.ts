import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskformComponent } from './taskform/taskform.component';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskForm:any;
  url=("http://localhost:8080/getTask");
 urladd=("http://localhost:8080/addTask");
 urlupdate=("http://localhost:8080/updateTask")
    constructor(private http:HttpClient ) {
   }
   getTasks(){
    const taskshttp = this.http.get(this.url);
    console.log("from api service"+taskshttp);
    return taskshttp;
   }
  addTasks(){
    this.taskForm={
      taskId :6,
      taskName :"Automation",
      taskAssignedTo : "Harish",
      startDate: "2022-11-16",
      endDate: "2022-11-17",
      priority: "high"
    }
    const addTaskHttp = this.http.post(this.urladd,this.taskForm);
    return addTaskHttp;

    const updateTaskHttp = this.http.put(this.urlupdate,this.taskForm);
    return updateTaskHttp;
   }

}
