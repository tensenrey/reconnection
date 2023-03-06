import { Module } from '@nestjs/common';
import { BroadcastsController } from './broadcasts.controller';

@Module({
  controllers: [BroadcastsController]
})
export class BroadcastsModule {}
