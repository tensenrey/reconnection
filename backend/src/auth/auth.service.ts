import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { AuthDTO } from '../dto/auth.dto';
import { UserModel } from '../models/user.model';
import { compare, genSalt, hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(dto: AuthDTO): Promise<UserModel> {
    return new this.userModel({
      username: dto.email,
      email: dto.email,
      hashpass: await hash(dto.password, await genSalt(15)),
      avatar: null,
      description: null,
    }).save();
  }

  async findUser(email: string): Promise<UserModel> {
    return this.userModel.findOne({ email }).exec();
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Pick<UserModel, 'email'>> {
    const user = await this.findUser(email);
    const isCorrectPassword = await compare(password, user.hashpass);

    if (!user) {
      throw new NotFoundException({
        message: 'Такого пользователя не существует',
        result: 'fail',
      });
    }

    if (!isCorrectPassword) {
      throw new UnauthorizedException('validate error');
    }

    return { email: user.email };
  }

  async signin(email: string): Promise<string> {
    const payload = { email };
    return await this.jwtService.signAsync(payload);
  }
}
