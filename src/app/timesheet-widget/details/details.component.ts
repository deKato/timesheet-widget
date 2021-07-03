import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiResponseItem } from '@models/ApiResponseItem';
import * as moment from 'moment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnChanges {
  @Input() selectedDay: moment.Moment | undefined;
  @Input() dayData: ApiResponseItem[] | undefined;

  formattedDate: string[] | undefined;
  workingHours: ApiResponseItem[] = [];
  expenses: ApiResponseItem[] = [];
  additionalHours: ApiResponseItem[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedDay']) {
      this.formatDate();
      this.splitData();
    }
  }

  private formatDate(): void {
    this.formattedDate = moment(this.selectedDay)
      .format('dddd DD.MM.YYYY')
      .split(' ');
  }

  private splitData(): void {
    if (this.dayData) {
      this.resetFilteredData();
      for (let dataItem of this.dayData) {
        if (dataItem.isExpenseType) {
          this.expenses.push(dataItem);
        } else if (dataItem.isHoursEventType) {
          this.workingHours.push(dataItem);
        } else if (dataItem.isAdditionalHoursEventType) {
          this.additionalHours.push(dataItem);
        }
      }
    }
  }

  private resetFilteredData(): void {
    this.expenses = [];
    this.workingHours = [];
    this.additionalHours = [];
  }
}
