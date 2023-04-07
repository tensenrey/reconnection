import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from '../models/user.model';
import { UserDTO } from 'src/dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
  ) {}

  async getUserByID(id: string): Promise<UserDTO> {
    try {
      const user = await this.userModel.findById({ _id: id }).exec();
      return {
        id: user.id,
        email: user.email,
        description: user.description,
        avatar: user.avatar,
        username: user.username,
      };
    } catch (e) {
      throw new NotFoundException({
        message: 'User not found',
        result: 'fail',
      });
    }
  }
}
