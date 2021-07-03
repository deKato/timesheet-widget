import { Component } from '@angular/core';
import { ApiResponseItem } from '@models/ApiResponseItem';
import * as moment from 'moment';

@Component({
  selector: 'app-timesheet-widget',
  templateUrl: './timesheet-widget.component.html',
  styleUrls: ['./timesheet-widget.component.scss'],
})
export class TimesheetWidgetComponent {
  daySelected: moment.Moment | undefined;
  dayData: ApiResponseItem[] | undefined;

  selectDay(day: moment.Moment): void {
    this.daySelected = day;
  }

  getDayData(data: ApiResponseItem[]): void {
    this.dayData = data;
  }
}
