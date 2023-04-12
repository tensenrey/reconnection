import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ transports: ['websocket'], namespace: '/channel' })
export class ChannelGateway {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    client.emit('connection', 'Successfully connected to server');
  }

  @SubscribeMessage('leave')
  handleDisconnect(client: Socket) {
    console.log(`Socket disconnected: ${client.id}`);
  }
}
