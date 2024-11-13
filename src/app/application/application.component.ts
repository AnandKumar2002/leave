import { Component } from '@angular/core';
import usersData from './../../../data.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss',
})
export class ApplicationComponent {
  users = usersData.users;
  filteredUsers = [...this.users];
  leaveStatusFilter = '';
  isModalOpen = false;
  selectedApplication: any = null;

  filterByStatus(status: string) {
    if (status) {
      this.filteredUsers = this.users.filter((user) =>
        user.leaveApplications.some((app) => app.status === status)
      );
    } else {
      this.filteredUsers = [...this.users];
    }
  }

  // Open modal for approval/rejection
  openModal(application: any) {
    this.selectedApplication = application;
    this.isModalOpen = true;
  }

  // Close modal
  closeModal() {
    this.isModalOpen = false;
    this.selectedApplication = null;
  }

  // Approve or Reject leave application
  changeApplicationStatus(status: string) {
    if (this.selectedApplication) {
      this.selectedApplication.status = status;
      this.closeModal();
    }
  }

  calculateDays(from: string, to: string): number {
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const timeDifference = toDate.getTime() - fromDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference;
  }
}
