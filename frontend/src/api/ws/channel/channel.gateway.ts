import { Socket } from "socket.io-client";

export class ChannelGateway {
  private readonly socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }
}
