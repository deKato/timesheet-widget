import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'monthAndYear',
})
export class MonthAndYearPipe implements PipeTransform {
  transform(day: moment.Moment): string {
    return `${day.format('MMMM')} ${day.format('YYYY')}`;
  }
}
