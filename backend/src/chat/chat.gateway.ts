import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway(81, { transports: ['websocket'], namespace: '/chat' })
export class ChatGateway {
  @SubscribeMessage('message')
  handleSendMessage(socket: Socket, message: string) {
    console.log(`Socket ${socket} send message ${message}`);
  }

  @SubscribeMessage('edit')
  handleEditMessage(socket: Socket, message: string) {
    console.log(`Socket ${socket} edit message ${message}`);
  }

  @SubscribeMessage('remove')
  handleRemoveMessage(socket: Socket, message: string) {
    console.log(`Socket ${socket} remove message ${message}`);
  }
}
