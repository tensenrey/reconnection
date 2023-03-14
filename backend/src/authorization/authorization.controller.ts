import { Controller, Post, Body, UsePipes, ValidationPipe, BadRequestException } from '@nestjs/common';
import { AuthDTO } from "../dto/auth.dto";
import { UserModel } from '../models/user.model';
import { AuthorizationService } from "./authorization.service";

@Controller('authorization')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async authorization(@Body() dto: AuthDTO) {
    const user = await this.authorizationService.findUser(dto.email);

    if (user) {
      throw new BadRequestException({
        message: "Такой пользователь уже существует",
        result: "fail"
      });
    }

    return this.authorizationService.createUser(dto);
  }
}
