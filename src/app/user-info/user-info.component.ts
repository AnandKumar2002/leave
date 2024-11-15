import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import usersData from './../../../data.json';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { ActivatedRoute } from '@angular/router';

type LeaveType = 'ML' | 'CL' | 'EL';

interface LeaveCount {
  approved: number;
  rejected: number;
}

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, FormsModule, FullCalendarModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  user: any;
  calendarOptions: any;
  showHolidayDetails = false;
  selectedHoliday: any;
  publicHolidays = usersData.publicHolidays;
  currentDateTime: string = '';

  // Properly type leaveCounts to prevent 'any' errors
  leaveCounts: Record<LeaveType, LeaveCount> = {
    ML: { approved: 0, rejected: 0 },
    CL: { approved: 0, rejected: 0 },
    EL: { approved: 0, rejected: 0 },
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin],
      events: [
        ...this.getFilteredUserLeaveEvents(),
        ...this.getPublicHolidayEvents(),
      ],
      eventDisplay: 'block',
      eventClick: this.handleEventClick.bind(this),
      height: '73vh',
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      const userId = +params.get('id')!;
      console.log(userId);

      this.user = usersData.users.find((u: any) => u.id === userId);
      console.log(usersData.users);

      if (this.user) {
        this.calculateLeaveCounts();
        this.calendarOptions = {
          plugins: [dayGridPlugin],
          initialView: 'dayGridMonth',
          events: [
            ...this.getFilteredUserLeaveEvents(),
            ...this.getPublicHolidayEvents(),
          ],
          eventClick: this.handleEventClick.bind(this),
        };
      }
    });

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

  calculateLeaveCounts() {
    this.leaveCounts = {
      ML: { approved: 0, rejected: 0 },
      CL: { approved: 0, rejected: 0 },
      EL: { approved: 0, rejected: 0 },
    };

    if (this.user && this.user.leaveHistory) {
      this.user.leaveHistory.forEach((leave: any) => {
        const leaveType = leave.type as LeaveType;

        if (['ML', 'CL', 'EL'].includes(leaveType)) {
          const status = leave.status;
          if (status === 'Approved') {
            this.leaveCounts[leaveType].approved++;
          } else if (status === 'Rejected') {
            this.leaveCounts[leaveType].rejected++;
          }
        }
      });
    }
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

  getFilteredUserLeaveEvents() {
    const leaveEvents: {
      title: string;
      start: string;
      end: string;
      color: string;
    }[] = [];
    const holidays = this.publicHolidays;

    if (this.user && this.user.leaveHistory) {
      this.user.leaveHistory.forEach((leave: any) => {
        if (!['Approved', 'Rejected'].includes(leave.status)) return;

        const leaveStart = new Date(leave.from);
        const leaveEnd = new Date(leave.to);

        for (
          let date = new Date(leaveStart);
          date <= leaveEnd;
          date.setDate(date.getDate() + 1)
        ) {
          if (
            date.getDay() === 0 || // Sunday
            this.isSecondSaturday(date) || // Second Saturday
            this.isHoliday(date, holidays) // Public Holiday
          ) {
            continue;
          }

          const color = leave.status === 'Approved' ? '#42A5F5' : '#FF7043';

          leaveEvents.push({
            title: `${this.user.name} (${leave.type} Leave)`,
            start: date.toISOString().split('T')[0],
            end: date.toISOString().split('T')[0],
            color: color,
          });
        }
      });
    }

    return leaveEvents;
  }

  getPublicHolidayEvents() {
    return this.publicHolidays.map((holiday) => ({
      title: holiday.name,
      start: holiday.startDate,
      end: holiday.endDate,
      color: '#FFA726',
    }));
  }

  handleEventClick(arg: any) {
    this.selectedHoliday = arg.event;
    this.showHolidayDetails = true;
  }

  closeHolidayDetails() {
    this.showHolidayDetails = false;
  }

  exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      document.getElementById('data-table') as HTMLTableElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'User Data');
    XLSX.writeFile(wb, 'User_Data.xlsx');
  }

  exportToPDF() {
    const doc = new jsPDF();

    if (this.user) {
      const personalDetails = this.user.personalDetails || {};

      const rows = [
        [
          this.user.id,
          this.user.name,
          personalDetails?.employeeId || 'N/A',
          `${this.user.CL_Taken || 0} / ${this.user.CL_Assign || 0}`,
          `${this.user.ML_Taken || 0} / ${this.user.ML_Assign || 0}`,
          `${this.user.EL_Taken || 0} / ${this.user.EL_Assign || 0}`,
          this.user.CL_Rejected || 0,
          this.user.ML_Rejected || 0,
          this.user.EL_Rejected || 0,
        ],
      ];

      doc.text('User Information Report', 20, 10);

      (doc as any).autoTable({
        head: [
          [
            'ID',
            'Name',
            'Employee ID',
            'CL Approved',
            'ML Approved',
            'EL Approved',
            'CL Rejected',
            'ML Rejected',
            'EL Rejected',
          ],
        ],
        body: rows,
        startY: 20,
      });

      const personalDetailsRows = [
        ['Phone Number', personalDetails?.phoneNumber || 'N/A'],
        ['Email Address', personalDetails?.email || 'N/A'],
        ['Department', personalDetails?.department || 'N/A'],
        ['Position', personalDetails?.position || 'N/A'],
        ['Date of Birth', personalDetails?.dateOfBirth || 'N/A'],
        ['Address', personalDetails?.address || 'N/A'],
        ['Emergency Contact', personalDetails?.emergencyContact || 'N/A'],
        ['Join Date', personalDetails?.joinDate || 'N/A'],
      ];

      (doc as any).autoTable({
        head: [['Detail', 'Information']],
        body: personalDetailsRows,
      });

      // Save the PDF
      doc.save('User_Information_Report.pdf');
    } else {
      console.error('User is undefined');
    }
  }
}
