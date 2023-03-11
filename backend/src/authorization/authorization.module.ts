import { Module } from '@nestjs/common';
import { AuthorizationController } from './authorization.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModel } from '../models/auth.model';

@Module({
  controllers: [AuthorizationController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: AuthModel,
        schemaOptions: {
          collection: 'Auth',
        },
      },
    ]),
  ],
})
export class AuthorizationModule {}
