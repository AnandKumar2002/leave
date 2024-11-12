import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('./calendar/calendar.component').then((m) => m.CalendarComponent),
  },
  {
    path: 'application',
    loadComponent: () =>
      import('./application/application.component').then(
        (m) => m.ApplicationComponent
      ),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./all-users/all-users.component').then(
        (m) => m.AllUsersComponent
      ),
  },
];
