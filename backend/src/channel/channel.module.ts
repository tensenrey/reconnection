import { Module } from '@nestjs/common';
import { ChannelController } from './channel.controller';
import { ChannelGateway } from './channel.gateway';

@Module({
  controllers: [ChannelController],
  providers: [ChannelGateway],
})
export class ChannelModule {}
