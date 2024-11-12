import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Input() isSidebarOpen: boolean = false;

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
