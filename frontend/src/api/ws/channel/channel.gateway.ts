import { Socket } from "socket.io-client";

export class ChannelGateway {
  private readonly socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

  public connect(): void {
      this.socket.on("connect",() => {
      console.log(this.socket);
    });
  }
}
