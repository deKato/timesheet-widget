import * as moment from 'moment';

export type ApiResponseItem = {
  date: moment.Moment | Date | string;
  quantity: number;
  price: number;
  eventTypeName: string;
  isExpenseType: boolean;
  isHoursEventType: boolean;
  isAdditionalHoursEventType: boolean;
  isWorkHour: boolean;
  isApproved: boolean;
  isRejected: boolean;
  tasksCount: number;
  firstTaskStart: Date | string;
  lastTaskEnd: Date | string;
};
