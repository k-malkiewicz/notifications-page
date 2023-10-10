import { Notification } from "./notification.interface";

export const notificationsData: Notification[] = [
    {
      username: 'Mark Webber',
      userImgSrc: '../../../assets/images/avatar-mark-webber.webp',
      notificationType: 'post',
      notificationAction: 'reacted to your recent post',
      notificationItem: 'My first tournament today!',
      timestamp: '1m ago',
      unread: true,
    },
    {
      username: 'Angela Gray',
      userImgSrc: '../../../assets/images/avatar-angela-gray.webp',
      notificationType: 'follow',
      notificationAction: 'followed you',
      notificationItem: null,
      timestamp: '5m ago',
      unread: true 
    },
    {
      username: 'Jacob Thompson',
      userImgSrc: '../../../assets/images/avatar-jacob-thompson.webp',
      notificationType: 'group',
      notificationAction: 'has joined your group',
      notificationItem: 'Chess Club',
      timestamp: '1 day ago',
      unread: true 
    },
    {
      username: 'Rizky Hasanuddin',
      userImgSrc: '../../../assets/images/avatar-rizky-hasanuddin.webp',
      notificationType: 'message',
      notificationAction: 'sent you a private messsage',
      notificationItem: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      timestamp: '5 days ago',
      unread: false 
    },
    {
      username: 'Kimberly Smith',
      userImgSrc: '../../../assets/images/avatar-kimberly-smith.webp',
      notificationType: 'comment',
      notificationAction: 'commented on your picture',
      notificationItem: '../../../assets/images/image-chess.webp',
      timestamp: '1 week ago',
      unread: false 
    },
    {
      username: 'Nathan Peterson',
      userImgSrc: '../../../assets/images/avatar-nathan-peterson.webp',
      notificationType: 'post',
      notificationAction: 'reacted to your recent post',
      notificationItem: '5 end-game strategies to increase your win rate',
      timestamp: '2 weeks ago',
      unread: false 
    },
    {
      username: 'Anna Kim',
      userImgSrc: '../../../assets/images/avatar-anna-kim.webp',
      notificationType: 'group',
      notificationAction: 'left the group',
      notificationItem: 'Chess Group',
      timestamp: '2 weeks ago',
      unread: false 
    },
];