import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./layout/layout/layout.component";
import { AllUsersComponent } from "./all-users/all-users.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, AllUsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
