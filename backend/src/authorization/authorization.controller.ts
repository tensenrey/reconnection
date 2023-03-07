import { Controller, Post } from '@nestjs/common';

@Controller('authorization')
export class AuthorizationController {
  @Post()
  authorization() {
    return {};
  }
}
