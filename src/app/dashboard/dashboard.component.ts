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

  calculateDays(startDate: string | Date, endDate: string | Date): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end.getTime() - start.getTime();
    const diffDays = timeDiff / (1000 * 3600 * 24);
    return diffDays + 1;
  }
}
