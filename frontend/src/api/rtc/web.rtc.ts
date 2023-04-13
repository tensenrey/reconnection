import freeice from "freeice";
import { CoreTypes } from "@/@types/namespaces";

class RTCController implements CoreTypes.RTC.IRTCController {
  constructor(private readonly iceServers: RTCIceServer[]) {
    this.iceServers = iceServers;
  }

  peerConnection(): RTCPeerConnection {
    return new RTCPeerConnection({ iceServers: this.iceServers });
  }

  async createOffer(
    peer: RTCPeerConnection
  ): Promise<RTCSessionDescriptionInit> {
    return await peer.createOffer();
  }

  async createAnswer(
    peer: RTCPeerConnection
  ): Promise<RTCSessionDescriptionInit> {
    return await peer.createAnswer();
  }

  async setLocalDescription(
    peer: RTCPeerConnection,
    description: RTCSessionDescription
  ): Promise<void> {
    await peer.setLocalDescription(description);
  }

  async setRemoteDescription(
    peer: RTCPeerConnection,
    description: RTCSessionDescription
  ): Promise<void> {
    await peer.setRemoteDescription(description);
  }

  async addIceCandidate(
    peer: RTCPeerConnection,
    candidate: RTCIceCandidate
  ): Promise<void> {
    await peer.addIceCandidate(candidate);
  }
}

export const WebRTC = new RTCController(freeice());
