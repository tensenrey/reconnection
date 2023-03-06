import { Controller, Get, Param } from '@nestjs/common';

@Controller('broadcasts')
export class BroadcastsController {
    @Get()
  getAll() {
    return [];
  }

  @Get("id")
  getById(@Param("id") id: string) { 
    return id
  }
}
