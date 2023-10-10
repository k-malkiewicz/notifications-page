export interface Notification {
    username: string,
    userImgSrc: string,
    notificationType: 'post' | 'follow' | 'group' | 'comment' | 'message',
    notificationAction: string,
    notificationItem: string | null,
    timestamp: string,
    unread: boolean,
}