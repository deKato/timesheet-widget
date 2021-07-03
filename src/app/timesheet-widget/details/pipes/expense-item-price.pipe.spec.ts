import * as moment from 'moment';
import { ExpenseItemPricePipe } from './expense-item-price.pipe';

const DATA_MOCK = {
  date: moment().format('YYYY-MM-DD'),
  quantity: 56,
  price: 0.99,
  eventTypeName: 'Lego',
  isExpenseType: true,
  isHoursEventType: false,
  isAdditionalHoursEventType: false,
  isWorkHour: true,
  isApproved: false,
  isRejected: false,
  tasksCount: 7,
  firstTaskStart: '2021-06-28T05:00:15+0000',
  lastTaskEnd: '2021-06-28T16:00:15+0000'
}

describe('ExpenseItemPricePipe', () => {
  it('create an instance', () => {
    const pipe = new ExpenseItemPricePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return total price with two decimal points', () => {
    const pipe = new ExpenseItemPricePipe();
    expect(pipe.transform(DATA_MOCK)).toEqual('55.44');
  })
});
