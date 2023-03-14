import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { AuthDTO } from '../dto/auth.dto';
import { UserModel } from '../models/user.model';
import { genSaltSync, hashSync } from 'bcryptjs';

@Injectable()
export class AuthorizationService {
  constructor(
    @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
  ) {}

  async createUser(dto: AuthDTO) {
    return new this.userModel({
      username: dto.email,
      email: dto.email,
      hashpass: hashSync(dto.password, genSaltSync(15)),
      avatar: "",
      description: "",
    }).save();
  }

  async findUser(email: string) {
    return this.userModel.findOne({ email }).exec();
  }
}
