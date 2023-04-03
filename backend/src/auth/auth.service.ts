import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { AuthDTO } from '../dto/auth.dto';
import { UserModel } from '../models/user.model';
import { compare, genSalt, hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { AccessDTO } from './../dto/access.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(dto: AuthDTO): Promise<UserModel> {
    const hashpass = await hash(dto.password, await genSalt(10));

    const user = new this.userModel({
      username: dto.email,
      email: dto.email,
      hashpass,
      avatar: null,
      description: null,
    });

    return await user.save();
  }

  async findUser(email: string): Promise<UserModel> {
    return await this.userModel.findOne({ email }).exec();
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Pick<UserModel, 'email'>> {
    const user = await this.findUser(email);

    if (!user) {
      throw new NotFoundException({
        message: 'Login_or_password_error',
        result: 'fail',
      });
    }

    const isCorrectPassword = await compare(password, user.hashpass);

    if (!isCorrectPassword) {
      throw new UnauthorizedException('validate error');
    }

    return { email: user.email };
  }

  async signin(email: string): Promise<string> {
    const user = await this.findUser(email);
    return await this.jwtService.signAsync({ email: user.email, id: user.id });
  }

  async session(token: string): Promise<AccessDTO> {
    try {
      const payload = await this.jwtService.verifyAsync(token);
      const user = await this.findUser(payload.email);
      return { access: user ? true : false };
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
