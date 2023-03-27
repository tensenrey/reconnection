import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  ConflictException,
  HttpCode,
} from '@nestjs/common';
import { AuthDTO } from '../dto/auth.dto';
import { SessionDTO } from '../dto/session.dto';
import { UserModel } from '../models/user.model';
import { AuthService } from './auth.service';
import { AccessDTO } from './../dto/access.dto';

@Controller('auth')
export class AuthorizationController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('/signup')
  async signUp(@Body() dto: AuthDTO): Promise<UserModel> {
    const user = await this.authService.findUser(dto.email);

    if (user) {
      throw new ConflictException({
        message: 'Такой пользователь уже существует',
        result: 'fail',
      });
    }

    return await this.authService.createUser(dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('/signin')
  async signIn(@Body() dto: AuthDTO): Promise<Record<string, string>> {
    const user = await this.authService.validateUser(dto.email, dto.password);

    return {
      token: await this.authService.signin(user.email),
    };
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('/session')
  async session(@Body() dto: SessionDTO): Promise<AccessDTO> {
    return await this.authService.session(dto.token);
  }
}
