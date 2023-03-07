import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway(81, { transports: ['websocket'], namespace: '/notification' })
export class NotificationsGateway {
  @SubscribeMessage('notification')
  handleNotification(socket: Socket, notification: string) {
    console.log(`Socket ${socket}, new notification ${notification}`);
  }
}
