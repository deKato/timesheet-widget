import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as moment from 'moment';

import { DetailsComponent } from './details.component';

const MOCK_DAY_DATA = [
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

describe('TimesheetComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should split data on day change', () => {
    component.dayData = MOCK_DAY_DATA;
    component.ngOnChanges({
      selectedDay: new SimpleChange(null, null, false),
    });
    expect(component.expenses).toEqual([MOCK_DAY_DATA[2], MOCK_DAY_DATA[3]]);
    expect(component.workingHours).toEqual([
      MOCK_DAY_DATA[0],
      MOCK_DAY_DATA[1],
    ]);
    expect(component.additionalHours).toEqual([MOCK_DAY_DATA[4]]);
  });
});
