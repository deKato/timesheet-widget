import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as moment from 'moment';

import { CalendarItemComponent } from './calendar-item.component';

const MOCK_DAY_1 = [
  {
    date: moment().subtract(2, 'days').format('YYYY-MM-DD'),
    quantity: 1,
    price: 1,
    eventTypeName: 'Foo',
    isExpenseType: false,
    isHoursEventType: true,
    isAdditionalHoursEventType: false,
    isWorkHour: true,
    isApproved: false,
    isRejected: true,
    tasksCount: 5,
    firstTaskStart: '2021-06-28T16:00:15+0000',
    lastTaskEnd: '2021-06-28T18:00:15+0000',
  },
];
const MOCK_DAY_2 = [
  {
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
    firstTaskStart: '2021-06-28T16:00:15+0000',
    lastTaskEnd: '2021-06-28T18:00:15+0000',
  },
];
const MOCK_DAY_3 = [
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
    lastTaskEnd: '2021-06-28T18:30:15+0000',
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
    firstTaskStart: '2021-06-28T05:00:15+0000',
    lastTaskEnd: '2021-06-28T20:00:15+0000',
  },
  {
    date: moment().format('YYYY-MM-DD'),
    quantity: 2,
    price: 1.56,
    eventTypeName: 'Dummy',
    isExpenseType: true,
    isHoursEventType: false,
    isAdditionalHoursEventType: false,
    isWorkHour: true,
    isApproved: false,
    isRejected: false,
    tasksCount: 7,
    firstTaskStart: '2021-06-28T05:00:15+0000',
    lastTaskEnd: '2021-06-28T16:00:15+0000',
  },
  {
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
    lastTaskEnd: '2021-06-28T16:00:15+0000',
  },
  {
    date: moment().format('YYYY-MM-DD'),
    quantity: 3.22,
    price: 0,
    eventTypeName: 'Some additional hour',
    isExpenseType: false,
    isHoursEventType: false,
    isAdditionalHoursEventType: true,
    isWorkHour: true,
    isApproved: false,
    isRejected: false,
    tasksCount: 7,
    firstTaskStart: '2021-06-28T10:00:15+0000',
    lastTaskEnd: '2021-06-28T20:00:15+0000',
  },
];

const MOCK_DAY_4 = [
  {
    date: moment().subtract(6, 'days').format('YYYY-MM-DD'),
    quantity: 1,
    price: 1,
    eventTypeName: 'Foo',
    isExpenseType: false,
    isHoursEventType: true,
    isAdditionalHoursEventType: false,
    isWorkHour: true,
    isApproved: false,
    isRejected: false,
    tasksCount: 0,
    firstTaskStart: '2021-06-28T16:00:15+0000',
    lastTaskEnd: '2021-06-28T18:00:15+0000',
  }
]

describe('CalendarItemComponent', () => {
  let component: CalendarItemComponent;
  let fixture: ComponentFixture<CalendarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark status as red if there is rejected task', () => {
    component.data = MOCK_DAY_1;
    component.ngOnInit();
    expect(component.status).toEqual('red');
  });

  it('should mark status as green if all tasks are approved', () => {
    component.data = MOCK_DAY_2;
    component.ngOnInit();
    expect(component.status).toEqual('green');
  });

  it('should mark status as grey if otherwise', () => {
    component.data = MOCK_DAY_3;
    component.ngOnInit();
    expect(component.status).toEqual('grey');
  });

  it('should mark status as undefined if there are no tasks', () => {
    component.data = MOCK_DAY_4;
    component.ngOnInit();
    expect(component.status).toBeUndefined();
  });
});
