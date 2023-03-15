import { Controller, Post, Body } from '@nestjs/common';
import { AuthDTO } from '../dto/auth.dto';

@Controller('authentication')
export class AuthenticationController {
  @Post()
  async authentication(@Body() dto: AuthDTO): Promise<string | undefined> {
    return 'token' || undefined;
  }
}
