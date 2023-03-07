import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway(81, { transports: ['websocket'], namespace: '/channel' })
export class ChannelGateway {
  @SubscribeMessage('join')
  handleConnect(client: Socket, roomID: string) {
    console.log(`Socket connected: ${client.id} room: ${roomID}`);
  }

  @SubscribeMessage('streaming')
  handleStream(client: Socket, stream: string) {
    console.log(`Socket streaming ${client.id} stream: ${stream}`);
  }

  @SubscribeMessage('leave')
  handleDisconnect(client: Socket) {
    console.log(`Socket disconnected: ${client.id}`);
  }

  @SubscribeMessage('action')
  handleAction(client: Socket, action: string) {
    console.log(`Socket ${client} toggle  action: ${action}`);
  }

  @SubscribeMessage('chat')
  handleChat(client: Socket, action: string) {
    console.log(`Socket ${client} toggle  action: ${action}`);
  }
}
