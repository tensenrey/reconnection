import { Module } from '@nestjs/common';
import { AuthorizationController } from './authorization.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from '../models/user.model';
import { AuthorizationService } from './authorization.service';

@Module({
  controllers: [AuthorizationController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
        schemaOptions: {
          collection: 'users',
        },
      },
    ]),
  ],
  providers: [AuthorizationService],
})
export class AuthorizationModule {}
