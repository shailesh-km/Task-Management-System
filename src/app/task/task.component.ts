import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Task{
  id:string;
  taskName:string
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

constructor (private router:Router ){

}

  addTask(taskData: Task){
console.log(taskData);
taskData.id = new Date().getTime().toString();
const storedtask: string|null = localStorage.getItem('task_data');
const existingTask: Task[]= storedtask? JSON.parse(storedtask) : [];

existingTask.push(taskData);
localStorage.setItem('task_data', JSON.stringify(existingTask));
this.router.navigate(['/dashboard'])

setTimeout(() => {
  window.location.reload();
}, 1000);
  }
}
