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

  ngOnInit(): void {
    this.filterByStatus("");
    
  }

  // filterByStatus(status: string) {
  //   if (status) {
  //     this.filteredUsers = this.users.filter((user) =>
  //       user.leaveApplications.some((app) => app.status === status)
  //     );
  //   } else {
  //     this.filteredUsers = [...this.users];
  //   }
  // }

  filterByStatus(status: string) {
    if (status) {
      this.filteredUsers = this.users
        .filter((user) =>
          user.leaveApplications.some((app) => app.status === status)
        )
        .map((user) => {
          // Sort leave applications for each user
          user.leaveApplications.sort((a, b) => {
            const fromDateA = new Date(a.from);
            const fromDateB = new Date(b.from);
            return fromDateB.getTime() - fromDateA.getTime(); // Latest leave first
          });
          return user;
        })
        .sort((a, b) => {
          // Sort users by leaveRequestedDate
          const dateA = new Date(a.leaveRequestedDate);
          const dateB = new Date(b.leaveRequestedDate);
          return dateB.getTime() - dateA.getTime(); // Latest request first
        });
    } else {
      this.filteredUsers = [...this.users]
        .map((user) => {
          // Sort leave applications for each user
          user.leaveApplications.sort((a, b) => {
            const fromDateA = new Date(a.from);
            const fromDateB = new Date(b.from);
            return fromDateB.getTime() - fromDateA.getTime(); // Latest leave first
          });
          return user;
        })
        .sort((a, b) => {
          // Sort users by leaveRequestedDate
          const dateA = new Date(a.leaveRequestedDate);
          const dateB = new Date(b.leaveRequestedDate);
          return dateB.getTime() - dateA.getTime(); // Latest request first
        });
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

  calculateDays(from: string, to: string) {
    const holidays = usersData.publicHolidays;
    const fromDate = new Date(from);
    const toDate = new Date(to);

    let currentDate = new Date(fromDate);
    let daysDifference = 0;

    while (currentDate <= toDate) {
      const dayOfWeek = currentDate.getDay();
      const isHoliday = this.isHoliday(currentDate, holidays);
      const isSecondSaturday = this.isSecondSaturday(currentDate);

      if (dayOfWeek !== 0 && !isHoliday && !isSecondSaturday) {
        daysDifference++;
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return daysDifference;
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
}
