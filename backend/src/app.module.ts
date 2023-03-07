import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { BroadcastsModule } from './broadcasts/broadcasts.module';
import { ChannelGateway } from './channel/channel.gateway';
import { ConfigModule } from '@nestjs/config';
import { ChannelController } from './channel/channel.controller';
import { NotificationsGateway } from './notifications/notifications.gateway';
import { ChatGateway } from './chat/chat.gateway';
import { StreamGateway } from './stream/stream.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PostsModule,
    BroadcastsModule,
  ],
  controllers: [ChannelController],
  providers: [ChannelGateway, NotificationsGateway, ChatGateway, StreamGateway],
})
export class AppModule {}
