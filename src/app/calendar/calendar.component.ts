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

  constructor(private http: HttpClient) {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin],
      events: [...this.getPublicHolidayEvents(), ...this.getUserLeaveEvents()],
    };
  }

  toggleHolidayForm() {
    this.showHolidayForm = !this.showHolidayForm;
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
    } else {
      alert('Please fill in all holiday details.');
    }
  }
}
