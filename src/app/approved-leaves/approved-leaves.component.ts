import { Component, OnInit } from '@angular/core';
import usersData from './../../../data.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-approved-leaves',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './approved-leaves.component.html',
  styleUrls: ['./approved-leaves.component.scss'],
})
export class ApprovedLeavesComponent implements OnInit {
  approvedLeaves: any[] = [];
  searchQuery: string = '';
  startDate: string = '';
  endDate: string = '';

  currentDateTime: string = '';

  constructor() {}

  ngOnInit(): void {
    this.fetchApprovedLeaves();
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

  get filteredApprovedLeaves(): any[] {
    let filtered = this.approvedLeaves.filter((leave) =>
      leave.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      filtered = filtered.filter((leave) => {
        const leaveFrom = new Date(leave.from);
        const leaveTo = new Date(leave.to);
        return (
          (leaveFrom >= start && leaveFrom <= end) ||
          (leaveTo >= start && leaveTo <= end)
        );
      });
    }

    return filtered;
  }

  fetchApprovedLeaves(): void {
    this.approvedLeaves = usersData.users.flatMap((user) =>
      user.leaveApplications
        .filter((app) => app.status === 'Approved')
        .map((app) => ({
          name: user.name,
          from: app.from,
          to: app.to,
          leaveType: app.type,
        }))
    );
  }

  calculateLeaveDays(from: Date, to: Date): number {
    const startDate = new Date(from);
    const endDate = new Date(to);
    const timeDifference = endDate.getTime() - startDate.getTime();
    return Math.ceil(timeDifference / (1000 * 3600 * 24)) + 1;
  }

  onFromDateChange(): void {
    if (this.startDate) {
      if (!this.endDate) {
        this.endDate = this.startDate;
      }
    }
  }

  // Export to PDF using jsPDF
  exportToPDF() {
    const doc = new jsPDF();
    const rows = this.filteredApprovedLeaves.map((leave, index) => [
      index + 1,
      leave.name,
      leave.leaveType,
      leave.from,
      leave.to,
      this.calculateLeaveDays(leave.from, leave.to),
      leave.status,
    ]);
    doc.text('Approved Leaves', 20, 10);
    (doc as any).autoTable({
      head: [
        [
          'SR NO.',
          'Name',
          'Leave Type',
          'From',
          'To',
          'No. of Days',
          'Approve',
        ],
      ],
      body: rows,
    });
    doc.save('approved_leaves.pdf');
  }

  // Export to Excel using xlsx
  exportToExcel() {
    const tableData = this.filteredApprovedLeaves.map((leave, index) => ({
      'SR NO.': index + 1,
      Name: leave.name,
      'Leave Type': leave.leaveType,
      From: leave.from,
      To: leave.to,
      'No. of Days': this.calculateLeaveDays(leave.from, leave.to),
      Approve: leave.status,
    }));

    const ws = XLSX.utils.json_to_sheet(tableData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Approved Leaves');
    XLSX.writeFile(wb, 'approved_leaves.xlsx');
  }
}
