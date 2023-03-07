import { Module } from '@nestjs/common';
import { PostsModule } from './post/post.module';
import { BroadcastsModule } from './broadcast/broadcast.module';
import { ChannelGateway } from './channel/channel.gateway';
import { ConfigModule } from '@nestjs/config';
import { ChannelController } from './channel/channel.controller';
import { NotificationsGateway } from './notification/notification.gateway';
import { ChatGateway } from './chat/chat.gateway';
import { StreamGateway } from './stream/stream.gateway';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthorizationController } from './authorization/authorization.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PostsModule,
    BroadcastsModule,
  ],
  controllers: [ChannelController, AuthenticationController, AuthorizationController],
  providers: [ChannelGateway, NotificationsGateway, ChatGateway, StreamGateway],
})
export class AppModule {}
