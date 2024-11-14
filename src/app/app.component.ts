import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./layout/layout/layout.component";
import { AllUsersComponent } from "./all-users/all-users.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { TestComponent } from "./test/test.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, AllUsersComponent, MainLayoutComponent, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
