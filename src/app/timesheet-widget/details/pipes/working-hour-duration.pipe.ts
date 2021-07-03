import { Pipe, PipeTransform } from '@angular/core';
import { ApiResponseItem } from '@models/ApiResponseItem';
import * as moment from 'moment';

@Pipe({
  name: 'workingHourDuration',
})
export class WorkingHourDurationPipe implements PipeTransform {
  transform(value: ApiResponseItem): string {
    const firstTaskStart = moment(value.firstTaskStart);
    const lastTaskEnd = moment(value.lastTaskEnd);
    const duration = moment.duration(lastTaskEnd.diff(firstTaskStart));
    const formattedDuration = moment.utc(duration.asMilliseconds()).format('H:mm');
    return formattedDuration;
  }
}
