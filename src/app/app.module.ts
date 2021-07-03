import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimesheetWidgetComponent } from './timesheet-widget/timesheet-widget.component';
import { HeaderComponent } from './timesheet-widget/header/header.component';
import { DetailsComponent } from './timesheet-widget/details/details.component';
import { FooterComponent } from './timesheet-widget/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarItemComponent } from './timesheet-widget/header/calendar-item/calendar-item.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { HoursHeaderPipe } from './timesheet-widget/details/pipes/hours-header.pipe';
import { WorkingHourDurationPipe } from './timesheet-widget/details/pipes/working-hour-duration.pipe';
import { ExpenseItemPricePipe } from './timesheet-widget/details/pipes/expense-item-price.pipe';
import { MonthAndYearPipe } from './timesheet-widget/header/pipes/month-and-year.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimesheetWidgetComponent,
    HeaderComponent,
    DetailsComponent,
    FooterComponent,
    CalendarItemComponent,
    MonthAndYearPipe,
    AddTaskComponent,
    HoursHeaderPipe,
    WorkingHourDurationPipe,
    ExpenseItemPricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
