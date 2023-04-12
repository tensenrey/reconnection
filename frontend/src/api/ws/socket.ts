import { io, Socket, ManagerOptions, SocketOptions } from "socket.io-client";

export class SocketCreator {
  private readonly SocketOptions: Partial<ManagerOptions & SocketOptions> = {
    forceNew: true,
    timeout: 1000,
    transports: ["websocket"],
    autoConnect: true,
  }

  connect() {
    return io("/", this.SocketOptions);
  }

  connectByNSP(nsp: string): Socket {
    return io("/" + nsp, this.SocketOptions);
  }
}
