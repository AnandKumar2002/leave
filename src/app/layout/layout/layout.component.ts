import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    CommonModule,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isSidebarVisible = false;
  isMobileSidebarVisible = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.isMobileSidebarVisible = !this.isMobileSidebarVisible;
  }

  isSidebarOpen() {
    return this.isMobileSidebarVisible;
  }
}
