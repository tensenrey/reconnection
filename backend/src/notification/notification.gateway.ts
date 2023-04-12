import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ transports: ['websocket'], namespace: '/notification' })
export class NotificationsGateway {
  @SubscribeMessage('new')
  handleNewNotification(socket: Socket, notification: string) {
    console.log(`Socket ${socket}, new notification ${notification}`);
  }

  @SubscribeMessage('read')
  handleReadNotification(socket: Socket, notification: string) {
    console.log(`Socket ${socket}, read notification ${notification}`);
  }

  @SubscribeMessage('delete')
  handleDeleteNotification(socket: Socket, notification: string) {
    console.log(`Socket ${socket}, read notification ${notification}`);
  }
}
