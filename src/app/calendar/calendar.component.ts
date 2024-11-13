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
  newHoliday = { name: '', start: '', end: '' };
  currentDate: string;
  errMessage: string | undefined;

  constructor(private http: HttpClient) {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin],
      events: [...this.getPublicHolidayEvents(), ...this.getUserLeaveEvents()],
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

  getUserLeaveEvents() {
    const leaveEvents: {
      title: string;
      start: string;
      end: string;
      color: string;
    }[] = [];

    usersData.users.forEach((user) => {
      user.leaveApplications.forEach((leave) => {
        leaveEvents.push({
          title: `${user.name} (${leave.type} Leave)`,
          start: leave.from,
          end: leave.to,
          color: '#42A5F5',
        });
      });
    });

    return leaveEvents;
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
}
