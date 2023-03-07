import { Controller, Get, Param } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('broadcasts')
export class BroadcastsController {
  constructor(private readonly configService: ConfigService) {}
  @Get()
  getAll() {
    return this.configService.get<string>('TEST');
  }

  @Get("id")
  getById(@Param("id") id: string) { 
    return id
  }
}
