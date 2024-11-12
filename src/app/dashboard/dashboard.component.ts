import { Component } from '@angular/core';
import { Router } from '@angular/router';
import usersData from './../../../data.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  currentDateTime: string = '';
  data = usersData;
  totalUsers: number = 0;
  totalLeaves: number = 0;
  approvedLeaves: any[] = [];
  publicHolidaysCount: number = 0;
  publicHolidays: any[] = [];
  isModalOpen: boolean = false;
  modalType: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateDateTime();
    this.calculateDashboardStats();
    this.fetchApprovedLeaves();
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
    // Calculate total users
    this.totalUsers = this.data.users.length;

    // Calculate total leaves (sum of yearly leaves)
    this.totalLeaves = this.data.users.reduce((total, user) => total + user.yearlyTotalLeaves, 0);

    // Calculate approved leaves and store them for modal display
    this.approvedLeaves = this.data.users
      .flatMap((user) =>
        user.leaveApplications.filter((app) => app.status === 'Approved').map((app) => ({
          name: user.name,
          from: app.from,
          to: app.to,
        }))
      );

    // Count public holidays
    this.publicHolidaysCount = this.data.publicHolidays.length;
  }

  fetchApprovedLeaves(): void {
    this.approvedLeaves = this.data.users.flatMap(user =>
      user.leaveApplications
        .filter(app => app.status === 'Approved')
        .map(app => ({
          name: user.name,
          from: app.from,
          to: app.to
        }))
    );
  }

  fetchPublicHolidays(): void {
    this.publicHolidays = this.data.publicHolidays;
  }

  redirectToUsers(): void {
    this.router.navigate(['/users']); // Navigate to /users route
  }

  openModal(type: string): void {
    this.modalType = type;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
