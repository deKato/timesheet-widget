import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetWidgetComponent } from './timesheet-widget/timesheet-widget.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  { path: '', component: TimesheetWidgetComponent },
  { path: 'add-task', component: AddTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
