import { ChannelGateway } from "./channel/channel.gateway";
import { SocketCreator } from "./socket";

export const GatewayEngine = {
  gateways: {ChannelGateway},
  SocketCreator: new SocketCreator(),
};
