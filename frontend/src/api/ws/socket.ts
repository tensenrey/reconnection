import { io, Socket, ManagerOptions, SocketOptions } from "socket.io-client";

export class SocketCreator {
  private readonly SocketOptions: Partial<ManagerOptions & SocketOptions> = {
    forceNew: true,
    timeout: 1000,
    transports: ["websocket"],
    autoConnect: true,
  };

  connect(options: Partial<ManagerOptions & SocketOptions> = {}) {
    return io("/", { ...this.SocketOptions, ...options });
  }

  connectByNSP(
    nsp: string,
    options: Partial<ManagerOptions & SocketOptions> = {}
  ): Socket {
    return io("/" + nsp, { ...this.SocketOptions, ...options });
  }
}
