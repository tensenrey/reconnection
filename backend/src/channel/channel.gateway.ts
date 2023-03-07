import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway(81, { transports: ['websocket'], namespace: '/channel' })
export class ChannelGateway {
  @SubscribeMessage('join')
  handleConnect(client: Socket, roomID: string) {
    console.log(`Socket connected: ${client.id} room: ${roomID}`);
  }

  @SubscribeMessage('leave')
  handleDisconnect(client: Socket) {
    console.log(`Socket disconnected: ${client.id}`);
  }
}
