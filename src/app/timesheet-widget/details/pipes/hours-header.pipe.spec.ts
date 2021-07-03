import * as moment from 'moment';
import { HoursHeaderPipe } from './hours-header.pipe';

const MOCK_DATA = [{
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
  lastTaskEnd: '2021-06-28T17:00:15+0000'
},
{
  date: moment().format('YYYY-MM-DD'),
  quantity: 1,
  price: 1,
  eventTypeName: 'Foo',
  isExpenseType: false,
  isHoursEventType: true,
  isAdditionalHoursEventType: false,
  isWorkHour: true,
  isApproved: false,
  isRejected: false,
  tasksCount: 7,
  firstTaskStart: '2021-06-28T16:00:15+0000',
  lastTaskEnd: '2021-06-28T17:30:15+0000'
},
{
  date: moment().format('YYYY-MM-DD'),
  quantity: 1,
  price: 1,
  eventTypeName: 'Bar',
  isExpenseType: false,
  isHoursEventType: true,
  isAdditionalHoursEventType: false,
  isWorkHour: true,
  isApproved: false,
  isRejected: false,
  tasksCount: 7,
  firstTaskStart: '2021-06-28T04:00:15+0000',
  lastTaskEnd: '2021-06-28T16:00:15+0000'
}]

describe('HoursHeaderPipe', () => {
  it('create an instance', () => {
    const pipe = new HoursHeaderPipe();
    expect(pipe).toBeTruthy();
  });

  it('should find earliest and latest times', () => {
    const pipe = new HoursHeaderPipe();
    expect(pipe.transform(MOCK_DATA)).toEqual('(07:00 - 20:30)')
  })
});
