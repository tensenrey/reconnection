import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway(81, { transports: ['websocket'] })
export class WebsocketGateway {
  @SubscribeMessage('chat')
  handleDisconnect(client: Socket) {
    console.log(`Socket disconnected: ${client.id}`);
  }

  handleConnect(client: Socket) {
    console.log(`Socket connected: ${client.id}`);
  }
}
