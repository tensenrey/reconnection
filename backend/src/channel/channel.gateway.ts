import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway(81, { transports: ['websocket'], namespace: "/channel" })
export class ChannelGateway {
  @SubscribeMessage('channel')
  handleConnect(client: Socket, roomID: string) {
    console.log(`Socket connected: ${client.id} room: ${roomID}`);
  }

  handleStream(client: Socket, stream: MediaStream) {
    console.log(`Socket streaming ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Socket disconnected: ${client.id}`);
  }

  handleAction(client: Socket, action: string) {
    console.log(`Socket ${client} toggle  action: ${action}`);
  }
}
