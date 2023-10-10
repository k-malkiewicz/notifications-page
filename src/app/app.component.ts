import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotificationsService } from './shared/notifications.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NotificationsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(public notificationsService: NotificationsService){}

  markAllAsRead(): void {
    this.notificationsService.markAllAsRead();
  }
}
