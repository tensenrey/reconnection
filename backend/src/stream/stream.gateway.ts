import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class StreamGateway {
  @SubscribeMessage('streaming')
  handleStream(client: Socket, stream: string) {
    console.log(`Socket streaming ${client.id} stream: ${stream}`);
  }

  @SubscribeMessage('action')
  handleAction(client: Socket, action: string) {
    console.log(`Socket ${client} toggle  action: ${action}`);
  }
}
