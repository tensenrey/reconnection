import { GatewayController } from "./gateway.controller";
import { socket } from "./socket";

export const gateway = {
  controller: new GatewayController(socket),
  socket,
};
