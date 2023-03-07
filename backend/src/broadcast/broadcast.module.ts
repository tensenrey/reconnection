import { Module } from '@nestjs/common';
import { BroadcastsController } from './broadcast.controller';

@Module({
  controllers: [BroadcastsController],
})
export class BroadcastsModule {}
