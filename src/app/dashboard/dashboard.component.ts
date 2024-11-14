import { Component } from '@angular/core';
import { Router } from '@angular/router';
import usersData from './../../../data.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  currentDateTime: string = '';
  data = usersData;
  totalUsers: number = 0;
  totalLeaves: number = 0;
  totalTakenLeaves: number = 0;
  totalApprovedLeaveDays: number = 0;
  approvedLeaves: any[] = [];
  publicHolidaysCount: number = 0;
  publicHolidays: any[] = [];
  isModalOpen: boolean = false;
  modalType: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateDateTime();
    this.calculateDashboardStats();
    this.fetchPublicHolidays();
    setInterval(() => {
      this.updateDateTime();
    }, 60000);
  }

  updateDateTime(): void {
    const now = new Date();
    this.currentDateTime = now.toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  }

  calculateDashboardStats(): void {
    this.totalUsers = this.data.users.length;

    this.totalLeaves = this.data.users.reduce(
      (total, user) => total + user.yearlyTotalLeaves,
      0
    );

    this.totalTakenLeaves = this.data.users.reduce(
      (total, user) => total + user.CL_Taken + user.ML_Taken + user.EL_Taken,
      0
    );

    // Calculating total approved leave days excluding weekends and public holidays
    this.totalApprovedLeaveDays = this.data.users.reduce((total, user) => {
      const approvedLeaveDays = user.leaveApplications
        .filter((app) => app.status === 'Approved')
        .reduce((leaveTotal, app) => {
          return leaveTotal + this.calculateApprovedLeaveDays(app.from, app.to);
        }, 0);
      return total + approvedLeaveDays;
    }, 0);

    this.approvedLeaves = this.data.users.flatMap((user) =>
      user.leaveApplications
        .filter((app) => app.status === 'Approved')
        .map((app) => ({
          name: user.name,
          from: app.from,
          to: app.to,
        }))
    );

    this.publicHolidaysCount = this.data.publicHolidays.length;
  }

  fetchPublicHolidays(): void {
    this.publicHolidays = this.data.publicHolidays;
  }

  redirectToUsers(): void {
    this.router.navigate(['/users']);
  }

  openModal(type: string): void {
    this.modalType = type;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  redirectToApprovedLeaves(): void {
    this.router.navigate(['/approved-leaves']);
  }

  // Function to calculate the approved leave days excluding weekends, public holidays, and second Saturdays
  calculateApprovedLeaveDays(from: string | Date, to: string | Date): number {
    const holidays = this.data.publicHolidays;
    const fromDate = new Date(from);
    const toDate = new Date(to);

    let currentDate = new Date(fromDate);
    let daysDifference = 0;

    while (currentDate <= toDate) {
      const dayOfWeek = currentDate.getDay();
      console.log(dayOfWeek);
      
      const isHoliday = this.isHoliday(currentDate, holidays);
      console.log(isHoliday);
      
      const isSecondSaturday = this.isSecondSaturday(currentDate);

      // Exclude Sundays (0), public holidays, and second Saturdays
      if (dayOfWeek !== 0 && !isHoliday && !isSecondSaturday) {
        daysDifference++;
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return daysDifference;
  }

  // Function to check if the current date is a public holiday
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

  // Function to check if the current date is the second Saturday of the month
  isSecondSaturday(date: Date): boolean {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstSaturday = ((6 - firstDayOfMonth.getDay() + 7) % 7) + 1;
    const secondSaturday = firstSaturday + 7;

    return date.getDate() === secondSaturday;
  }

  calculateDays(startDate: string | Date, endDate: string | Date): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end.getTime() - start.getTime();
    const diffDays = timeDiff / (1000 * 3600 * 24);
    return diffDays + 1;
  }
}
