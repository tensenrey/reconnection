import { Module } from '@nestjs/common';
import { PostsModule } from './post/post.module';
import { BroadcastsModule } from './broadcast/broadcast.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ChannelModule } from './channel/channel.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { NotificationModule } from './notification/notification.module';
import { ChatModule } from './chat/chat.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { MongoConfig } from './configs/mongo.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: MongoConfig
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
