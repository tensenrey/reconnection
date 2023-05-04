import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ transports: ['websocket'], namespace: '/channel' })
export class ChannelGateway {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    client.emit('connection', 'world');
  }

  @SubscribeMessage('join')
  async handleJoin(client: Socket) {
    const sockets = await this.server.local.fetchSockets();
    const socketsId: string[] = [];

    for (const socket of sockets) {
      socketsId.push(socket.id);
    }

    client.emit('join', { socketsIds: socketsId });
    client.broadcast.emit('join', { socketsIds: socketsId });
  }

  @SubscribeMessage('leave')
  async handleDisconnect(client: Socket) {
    const sockets = await this.server.local.fetchSockets();
    const socketsId: string[] = [];

    for (const socket of sockets) {
      socketsId.push(socket.id);
    }

    client.broadcast.emit('leave', { sockets: socketsId });
  }
}
