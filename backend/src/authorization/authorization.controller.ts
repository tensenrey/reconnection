import { Controller, Post, Body } from '@nestjs/common';
import { AuthDTO } from "../dto/auth.dto";

@Controller('authorization')
export class AuthorizationController {
  @Post()
  async authorization(@Body() dto: AuthDTO): Promise<string | undefined> {
    return "token" || undefined;
  }
}
