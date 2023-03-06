export namespace CoreTypes {
  export namespace Card {
    export interface ICardData {
      title: string;
      author: string;
      views: number;
      type: CardType;
    }

    export interface ICardDataSlice {
      data: ICardData[];
    }

    export enum CardType {
      "broadcast",
      "post",
    }

    export interface IContentCard {
      card: ICardData;
    }
  }

  export namespace LayoutController {
    export enum LayoutsList {
      Posts = "posts",
      Broadcast = "broadcast",
    }

    export interface IControllerSlice {
      transform: number;
      currentLayout: LayoutsList;
    }
  }

  export namespace Channel {
    export interface IChannelClient {
      socket: string;
    }

    export interface IChannelSlice {
      sockets: IChannelClient[];
    }
  }

  export namespace Auth {
    export interface IAuthSlice {
      email: string;
      password: string;
    }
  }

  export namespace Routing {
    export interface IPrivateRoute {
      children: JSX.Element;
    }
  }

  export namespace Layouting {
    export interface IResponsiveLayout {
      children: JSX.Element;
    }
  }

  export namespace RTC {
    export interface IRTCController {
      peerConnection: () => RTCPeerConnection;
      createOffer: (
        peer: RTCPeerConnection
      ) => Promise<RTCSessionDescriptionInit>;
      createAnswer: (
        peer: RTCPeerConnection
      ) => Promise<RTCSessionDescriptionInit>;
      setLocalDescription: (
        peer: RTCPeerConnection,
        description: RTCSessionDescription
      ) => Promise<void>;
      setRemoteDescription: (
        peer: RTCPeerConnection,
        description: RTCSessionDescription
      ) => Promise<void>;
      addIceCandidate: (
        peer: RTCPeerConnection,
        candidate: RTCIceCandidate
      ) => Promise<void>;
    }
  }
}
