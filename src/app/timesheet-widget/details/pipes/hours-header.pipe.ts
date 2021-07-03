import { Pipe, PipeTransform } from '@angular/core';
import { ApiResponseItem } from '@models/ApiResponseItem';
import * as moment from 'moment';

@Pipe({
  name: 'hoursHeader',
})
export class HoursHeaderPipe implements PipeTransform {
  transform(values: ApiResponseItem[]): string {
    const firstTaskStart = this.getFirstTaskTime(values);
    const lastTaskEnd = this.getLastTaskTime(values);

    return `(${firstTaskStart} - ${lastTaskEnd})`;
  }

  private getLastTaskTime(values: ApiResponseItem[]) {
    const lastTaskEndMoments = values.map((obj) => moment(obj.lastTaskEnd));
    const lastTaskEnd = moment.max(lastTaskEndMoments).format('HH:mm');
    return lastTaskEnd;
  }

  private getFirstTaskTime(values: ApiResponseItem[]) {
    const fistTastStartMoments = values.map((obj) =>
      moment(obj.firstTaskStart)
    );
    const firstTaskStart = moment.min(fistTastStartMoments).format('HH:mm');
    return firstTaskStart;
  }
}
