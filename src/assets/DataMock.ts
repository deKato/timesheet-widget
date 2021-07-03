import * as moment from "moment"

export const responseMock = [{
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
    lastTaskEnd: '2021-06-28T18:00:15+0000'
},
{
    date: moment().subtract(5, 'days').format('YYYY-MM-DD'),
    quantity: 1,
    price: 1,
    eventTypeName: 'Foo',
    isExpenseType: false,
    isHoursEventType: true,
    isAdditionalHoursEventType: false,
    isWorkHour: true,
    isApproved: false,
    isRejected: false,
    tasksCount: 2,
    firstTaskStart: '2021-06-28T16:00:15+0000',
    lastTaskEnd: '2021-06-28T18:00:15+0000'
},
{
    date: moment().subtract(4, 'days').format('YYYY-MM-DD'),
    quantity: 1,
    price: 1,
    eventTypeName: 'Foo',
    isExpenseType: false,
    isHoursEventType: true,
    isAdditionalHoursEventType: false,
    isWorkHour: true,
    isApproved: false,
    isRejected: false,
    tasksCount: 3,
    firstTaskStart: '2021-06-28T16:00:15+0000',
    lastTaskEnd: '2021-06-28T18:00:15+0000'
},
{
    date: moment().subtract(3, 'days').format('YYYY-MM-DD'),
    quantity: 1,
    price: 1,
    eventTypeName: 'Foo',
    isExpenseType: false,
    isHoursEventType: true,
    isAdditionalHoursEventType: false,
    isWorkHour: false,
    isApproved: false,
    isRejected: false,
    tasksCount: 4,
    firstTaskStart: '2021-06-28T16:00:15+0000',
    lastTaskEnd: '2021-06-28T18:00:15+0000'
},
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
    lastTaskEnd: '2021-06-28T18:00:15+0000'
},
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
    lastTaskEnd: '2021-06-28T18:00:15+0000'
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
    lastTaskEnd: '2021-06-28T18:30:15+0000'
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
    lastTaskEnd: '2021-06-28T20:00:15+0000'
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
    lastTaskEnd: '2021-06-28T16:00:15+0000'
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
    lastTaskEnd: '2021-06-28T16:00:15+0000'
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
    lastTaskEnd: '2021-06-28T20:00:15+0000'
}]