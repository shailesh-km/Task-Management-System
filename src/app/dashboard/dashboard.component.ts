import { Component } from '@angular/core';
interface Task{

}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  displayedColumns: string[]=['taskName', 'startDate', 'endDate', 'duration', 'dueDate', 'reportingTo','status']
  tasks:Task[]=[];

  ngOnInit(){
this.loadTasks();
  }

  loadTasks(){
    const storedtask: string | null = localStorage.getItem('task_data');
    this.tasks = storedtask ? JSON.parse(storedtask): []  
    console.log(this.tasks);
  }
}
