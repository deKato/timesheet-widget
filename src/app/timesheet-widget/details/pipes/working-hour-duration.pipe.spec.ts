import * as moment from 'moment';
import { WorkingHourDurationPipe } from './working-hour-duration.pipe';

const MOCK_DATA = {
  date: moment().subtract(1, 'days').format('YYYY-MM-DD'),
  quantity: 1,
  price: 1,
  eventTypeName: 'Foo',
  isExpenseType: false,
  isHoursEventType: true,
  isAdditionalHoursEventType: false,
  isWorkHour: true,
  isApproved: true,
  isRejected: false,
  tasksCount: 6,
  firstTaskStart: '2021-06-28T17:00:15+0000',
  lastTaskEnd: '2021-06-28T19:25:15+0000'
}

describe('WorkingHourDurationPipe', () => {
  it('create an instance', () => {
    const pipe = new WorkingHourDurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should calculate duration between start date and end date', () => {
    const pipe = new WorkingHourDurationPipe();
    expect(pipe.transform(MOCK_DATA)).toEqual('2:25');
  })
});
