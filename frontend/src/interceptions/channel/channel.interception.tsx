import React, { FunctionComponent, useLayoutEffect } from "react";
import { api } from "@/api/export";
import { useActions } from "@/hooks/redux.useActions";

interface IChannel {
  component: FunctionComponent
}

interface IChannelSocketList {
  socketsIds: string[]
}

export const Channel: FunctionComponent<IChannel> = ({ component: Component }) => {
  const { ChannelControllerJoinEvent } = useActions()
  const channelIO = api.GatewayEngine.SocketCreator.connectByNSP("channel");
  const channelWay = new api.GatewayEngine.gateways.ChannelGateway(channelIO);
  
  useLayoutEffect(() => {
    channelWay.connect();
    channelIO.emit("join");
    channelIO.on("join", (socketList: IChannelSocketList) => {
      for (const socket of socketList.socketsIds) {
        ChannelControllerJoinEvent({ id: socket });
      }
    });
  }, [])

  return <Component />;
}
 