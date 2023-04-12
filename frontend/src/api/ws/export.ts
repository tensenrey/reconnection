import { GatewayController } from "./gateway.controller";
import { SocketCreator } from "./socket";

export const gateway = {
  controllers: {GatewayController},
  SocketCreator: new SocketCreator(),
};
