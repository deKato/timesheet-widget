import { Component, Input, OnInit } from '@angular/core';
import { ApiResponseItem } from '@models/ApiResponseItem';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.scss'],
})
export class CalendarItemComponent implements OnInit {
  @Input() data: any | undefined;
  @Input() day: moment.Moment | undefined;
  @Input() isSelected: boolean | undefined;

  weekDayName: string | undefined;
  dayNumber: string | undefined;
  todayDayNumber: string | undefined;
  status: string | undefined;

  ngOnInit(): void {
    this.formatDateObjects();
    if (this.data) {
      this.getStatus();
    } 
  }

  private formatDateObjects() {
    this.weekDayName = this.day?.format('ddd');
    this.dayNumber = this.day?.format('DD');
    this.todayDayNumber = moment().format('DD');
  }

  private getStatus(): void {
    if (this.hasNoTasks()) {
      this.status = undefined;
      return;
    }
    if (this.allTasksApproved()) {
      this.status = 'green';
    } else if (this.hasRejectedTask()) {
      this.status = 'red';
    } else {
      this.status = 'grey';
    }
  }

  private hasRejectedTask(): boolean {
    return this.data.find((object: ApiResponseItem) => object.isRejected === true);
  }

  private allTasksApproved(): boolean {
    return this.data.every((object: ApiResponseItem) => object.isApproved === true);
  }

  private hasNoTasks(): boolean {
    return this.data.every((object: ApiResponseItem) => object.tasksCount === 0);
  }
}
