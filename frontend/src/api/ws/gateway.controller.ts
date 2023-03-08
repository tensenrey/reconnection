import { Socket } from "socket.io-client";

export class GatewayController {
  private readonly socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }
}
