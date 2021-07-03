import { Component, Input, OnInit } from '@angular/core';
import { ApiResponseItem } from '@models/ApiResponseItem';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.scss'],
})
export class CalendarItemComponent implements OnInit {
  @Input() data: ApiResponseItem[] | undefined;
  @Input() day: moment.Moment | undefined;
  @Input() isSelected: boolean | undefined;

  weekDayName: string | undefined;
  dayNumber: string | undefined;
  todayDayNumber: string | undefined;
  status: string | undefined;
  hasNoTasks: boolean | undefined;
  hoursWorked: number | undefined;

  ngOnInit(): void {
    this.formatDateObjects();
    this.getStatus();
    this.getHoursWorked();
  }

  private formatDateObjects() {
    this.weekDayName = this.day?.format('ddd');
    this.dayNumber = this.day?.format('DD');
    this.todayDayNumber = moment().format('DD');
  }

  private getStatus(): void {
    if (this.checkIfHasNoTasks()) {
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

  private getHoursWorked(): void {
    this.hoursWorked = this.data?.filter(item => item.isHoursEventType).reduce((acc, obj) => acc + obj.quantity, 0);
  }

  private hasRejectedTask(): boolean | undefined {
    return this.data?.some(
      (object: ApiResponseItem) => object.isRejected === true
    );
  }

  private allTasksApproved(): boolean | undefined {
    return this.data?.every(
      (object: ApiResponseItem) => object.isApproved === true
    );
  }

  private checkIfHasNoTasks(): boolean | undefined {
    this.hasNoTasks = this.data?.every(
      (object: ApiResponseItem) => object.tasksCount === 0
    );
    return this.hasNoTasks;
  }
}
