import { Component, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { EventEmitter } from '@angular/core';
import { responseMock } from 'assets/DataMock';
import { ApiResponseItem } from '@models/ApiResponseItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  calendar: moment.Moment[];
  selectedDay: moment.Moment;
  data: Map<moment.Moment, ApiResponseItem[]>;

  @Output() daySelected: EventEmitter<moment.Moment> = new EventEmitter();
  @Output() dayData: EventEmitter<ApiResponseItem[]> = new EventEmitter();

  constructor() {
    this.data = new Map();
    this.calendar = [moment().subtract(6, 'days')];
    for (let i = 1; i < 7; i++) {
      this.calendar.push(moment().subtract(6, 'days').add(i, 'days'));
    }
    this.selectedDay = this.calendar[this.calendar.length - 1];
  }

  ngOnInit(): void {
    this.fetchData();
  }

  selectDay(day: moment.Moment): void {
    this.selectedDay = day;
    this.emitComponentData(day);
  }

  private fetchData(): void {
    this.calendar.forEach((day) => {
      this.data.set(day, this.getDataForTheDay(day));
    });
    this.emitComponentData(this.selectedDay);
  }

  private emitComponentData(day: moment.Moment): void {
    this.daySelected.emit(day);
    this.dayData.emit(this.data.get(day));
  }

  private getDataForTheDay(day: moment.Moment): ApiResponseItem[] {
    return responseMock.filter(
      (response) =>
        response.date === day.format('YYYY-MM-DD') &&
        response.isWorkHour === true
    );
  }
}
