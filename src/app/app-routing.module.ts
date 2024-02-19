import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TaskComponent } from './task/task.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'notifications', component:NotificationsComponent},
  {path:'tasks', component:TaskComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
