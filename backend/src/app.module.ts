import { Module } from '@nestjs/common';
import { PostsModule } from './post/post.module';
import { BroadcastsModule } from './broadcast/broadcast.module';
import { ConfigModule } from '@nestjs/config';
import { ChannelModule } from './channel/channel.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { NotificationModule } from './notification/notification.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PostsModule,
    BroadcastsModule,
    ChannelModule,
    AuthenticationModule,
    AuthorizationModule,
    NotificationModule,
    ChatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
