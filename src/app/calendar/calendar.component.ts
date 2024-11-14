import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import usersData from './../../../data.json';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  imports: [CommonModule, FullCalendarModule, FormsModule],
})
export class CalendarComponent {
  calendarOptions: any;
  showHolidayForm = false;
  showHolidayDetails = false;
  newHoliday = { name: '', start: '', end: '' };
  currentDate: string;
  errMessage: string | undefined;
  selectedDayEvents: Array<{ title: string }> = [];
  selectedHoliday: any = null;

  constructor(private http: HttpClient) {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin],
      events: [
        ...this.getPublicHolidayEvents(),
        ...this.getFilteredUserLeaveEvents(),
      ],
      eventDisplay: 'list-item',
      eventClick: this.handleEventClick.bind(this),
    };

    this.currentDate = this.getTodayDate();
  }

  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  toggleHolidayForm() {
    this.showHolidayForm = !this.showHolidayForm;
    this.errMessage = '';
  }

  getPublicHolidayEvents() {
    return usersData.publicHolidays.map((holiday) => ({
      title: holiday.name,
      start: holiday.startDate,
      end: holiday.endDate,
      color: '#FFA726',
    }));
  }

  getFilteredUserLeaveEvents() {
    const leaveEvents: {
      title: string;
      start: string;
      end: string;
      color: string;
    }[] = [];

    usersData.users.forEach((user) => {
      user.leaveApplications.forEach((leave) => {
        if (leave.status !== 'Approved') return;

        const leaveStartDate = new Date(leave.from);
        const leaveEndDate = new Date(leave.to);

        for (
          let date = new Date(leaveStartDate);
          date <= leaveEndDate;
          date.setDate(date.getDate() + 1)
        ) {
          if (
            date.getDay() === 0 ||
            this.isHoliday(date, usersData.publicHolidays) ||
            this.isSecondSaturday(date)
          ) {
            continue;
          }

          leaveEvents.push({
            title: `${user.name} (${leave.type} Leave)`,
            start: date.toISOString().split('T')[0],
            end: date.toISOString().split('T')[0],
            color: '#42A5F5',
          });
        }
      });
    });

    return leaveEvents;
  }

  isHoliday(
    date: Date,
    holidays: Array<{ startDate: string; endDate: string; name: string }>
  ): boolean {
    for (const holiday of holidays) {
      const holidayStart = new Date(holiday.startDate);
      const holidayEnd = new Date(holiday.endDate);

      if (date >= holidayStart && date <= holidayEnd) {
        return true;
      }
    }
    return false;
  }

  isSecondSaturday(date: Date): boolean {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstSaturday = ((6 - firstDayOfMonth.getDay() + 7) % 7) + 1;
    const secondSaturday = firstSaturday + 7;

    return date.getDate() === secondSaturday;
  }

  onStartDateChange(event: any) {
    const startDate = event.target.value;
    this.newHoliday.start = startDate;

    if (this.newHoliday.end < startDate) {
      this.newHoliday.end = '';
    }
  }

  addHoliday() {
    if (this.newHoliday.name && this.newHoliday.start && this.newHoliday.end) {
      const newHolidayEvent = {
        title: this.newHoliday.name,
        start: this.newHoliday.start,
        end: this.newHoliday.end,
        color: '#FFA726',
      };

      this.calendarOptions.events = [
        ...this.calendarOptions.events,
        newHolidayEvent,
      ];

      this.newHoliday = { name: '', start: '', end: '' };
      this.showHolidayForm = false;
      this.errMessage = '';
    } else {
      this.errMessage = 'Please fill in all the fields.';
    }
  }

  handleEventClick(arg: any) {
    const clickedDate = arg.event.startStr;

    const clickedEvent = this.calendarOptions.events.find(
      (event: any) => event.start === clickedDate
    );

    if (clickedEvent) {
      console.log(clickedEvent);

      this.selectedHoliday = clickedEvent;
      this.showHolidayDetails = true;
    }
  }

  closeHolidayDetails() {
    this.showHolidayDetails = false;
  }
}
