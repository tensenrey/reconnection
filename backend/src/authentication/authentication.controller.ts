import { Controller, Post } from '@nestjs/common';

@Controller('authentication')
export class AuthenticationController {
  @Post()
  authentication() {
    return {} || undefined; 
  }
}
