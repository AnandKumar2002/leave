import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  public httpClient = inject(HttpClient);

  data: any[] = [];
  publicHolidays: any[] = [];

  constructor() {
    // this.fetchUsers();
    // this.fetchPublicHolidays();
  }

  fetchUsers() {
    this.httpClient.get('http://localhost:3000/users').subscribe({
      next: (response: any) => {
        console.log('Users:', response);
        this.data = response;
      },
      error: (error: any) => {
        console.log('Error fetching users data:', error);
      },
    });
  }

  fetchPublicHolidays() {
    this.httpClient.get('http://localhost:3000/publicHolidays').subscribe({
      next: (response: any) => {
        console.log('Public Holidays:', response);
        this.publicHolidays = response;
      },
      error: (error: any) => {
        console.log('Error fetching public holidays data:', error);
      },
    });
  }
}
