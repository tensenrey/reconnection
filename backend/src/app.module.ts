import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { BroadcastsModule } from './broadcasts/broadcasts.module';
import { WebsocketGateway } from './websocket/websocket.gateway';

@Module({
  imports: [PostsModule, BroadcastsModule],
  controllers: [],
  providers: [WebsocketGateway],
})
export class AppModule {}
