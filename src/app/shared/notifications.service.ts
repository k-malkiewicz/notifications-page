import { Injectable } from '@angular/core';
import { notificationsData } from './notifications.data';
import { Notification } from './notification.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notifications: Notification[] = notificationsData;

  markAllAsRead(): void {
    this.notifications.map(notification => notification.unread = false);
  }

  get getUnreadMessagesCount(): number {
    let count = 0;

    this.notifications.forEach(notification => {
      notification.unread ? count++ : 0;
    });

    return count;
  }
}
