import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { BroadcastsModule } from './broadcasts/broadcasts.module';
import { ChannelGateway } from './channel/channel.gateway';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PostsModule,
    BroadcastsModule,
  ],
  controllers: [],
  providers: [ChannelGateway],
})
export class AppModule {}
