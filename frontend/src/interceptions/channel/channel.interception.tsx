import React, { FunctionComponent } from "react";
import { api } from "@/api/export";

export const Channel: FunctionComponent = () => {
  const channelIO = api.GatewayEngine.SocketCreator.connectByNSP("channel");

  channelIO.on("connect",() => {
    console.log(channelIO);
  });

  return (<>Channel Interception</>);
}
 