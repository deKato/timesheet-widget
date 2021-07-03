import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { DetailsComponent } from 'app/timesheet-widget/details/details.component';
import { ExpenseItemPricePipe } from 'app/timesheet-widget/details/pipes/expense-item-price.pipe';
import { HoursHeaderPipe } from 'app/timesheet-widget/details/pipes/hours-header.pipe';
import { WorkingHourDurationPipe } from 'app/timesheet-widget/details/pipes/working-hour-duration.pipe';
import { FooterComponent } from 'app/timesheet-widget/footer/footer.component';
import { CalendarItemComponent } from 'app/timesheet-widget/header/calendar-item/calendar-item.component';
import { HeaderComponent } from 'app/timesheet-widget/header/header.component';
import { MonthAndYearPipe } from 'app/timesheet-widget/header/pipes/month-and-year.pipe';

import { TimesheetWidgetComponent } from './timesheet-widget.component';

describe('TimesheetWidgetComponent', () => {
  let component: TimesheetWidgetComponent;
  let fixture: ComponentFixture<TimesheetWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TimesheetWidgetComponent,
        HeaderComponent,
        DetailsComponent,
        FooterComponent,
        MonthAndYearPipe,
        CalendarItemComponent,
        HoursHeaderPipe,
        WorkingHourDurationPipe,
        ExpenseItemPricePipe
      ],
      imports: [
          MatIconModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
