import { Component, inject } from '@angular/core';
import usersData from './../../../data.json';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Router, RouterLink } from '@angular/router';

interface LeaveApplication {
  type: string;
  from: string;
  to: string;
  status: string;
}

interface User {
  id: number;
  name: string;
  yearlyTotalLeaves: number;
  CL_Taken: number;
  ML_Taken: number;
  EL_Taken: number;

  CL_Assign: number;
  ML_Assign: number;
  EL_Assign: number;
  leaveApplications: LeaveApplication[];
}

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent {
  router = inject(Router);
  users: User[] = usersData.users;
  searchQuery = '';
  selectedUser: User | null = null;
  showLeaveDetails = false;
  showConfirmModal = false;
  editIcon = faEdit;
  viewIcon = faEye;
  sortColumn: keyof User = 'id';
  sortAscending = true;

  currentDateTime: string = '';

  ngOnInit(): void {
    this.updateDateTime();
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

  get filteredUsers() {
    return this.users
      .filter((user) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
      .sort((a, b) => this.sortUsers(a, b));
  }

  openEditModal(user: User) {
    this.selectedUser = { ...user };
  }

  updateYearlyLeaves() {
    if (this.selectedUser) {
      this.selectedUser.yearlyTotalLeaves = this.calculateYearlyTotal();
    }
  }

  calculateYearlyTotal(): number {
    return (
      (this.selectedUser?.CL_Assign || 0) +
      (this.selectedUser?.ML_Assign || 0) +
      (this.selectedUser?.EL_Assign || 0)
    );
  }

  confirmSave() {
    this.showConfirmModal = true;
  }

  closeConfirmModal() {
    this.showConfirmModal = false;
  }

  saveChanges() {
    if (this.selectedUser) {
      const index = this.users.findIndex(
        (user) => user.id === this.selectedUser!.id
      );
      this.users[index] = { ...this.selectedUser };
      this.selectedUser = null;
      this.showConfirmModal = false;
    }
  }

  closeModal() {
    this.selectedUser = null;
    this.showLeaveDetails = false;
  }

  // Export to Excel
  exportToExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.users);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
    XLSX.writeFile(workbook, 'users.xlsx');
  }

  // Export to PDF
  exportToPDF() {
    const doc = new jsPDF();
    const rows = this.users.map((user) => [
      user.id,
      user.name,
      user.yearlyTotalLeaves,
      user.CL_Assign,
      user.ML_Assign,
      user.EL_Assign,
    ]);

    doc.text('User List', 20, 10);
    (doc as any).autoTable({
      head: [['ID', 'Name', 'Yearly Leaves', 'CL', 'ML', 'EL']],
      body: rows,
    });
    doc.save('users.pdf');
  }

  // Sorting Function
  sortData(column: keyof User) {
    if (this.sortColumn === column) {
      this.sortAscending = !this.sortAscending;
    } else {
      this.sortColumn = column;
      this.sortAscending = true;
    }
  }

  sortUsers(a: User, b: User) {
    const valueA = a[this.sortColumn];
    const valueB = b[this.sortColumn];

    // Handle string comparison
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return this.sortAscending
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return this.sortAscending ? valueA - valueB : valueB - valueA;
    }

    return 0;
  }

  totalTakenLeave(user: User): number {
    return (user.CL_Taken || 0) + (user.ML_Taken || 0) + (user.EL_Taken || 0);
  }

  goToUserInfo(user: User) {
    this.router.navigate(['/user-info', user.id]);
    console.log(user);
  }
}
