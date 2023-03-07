import { Delete, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('broadcasts')
export class BroadcastsController {
  @Get()
  getAll() {
    return [] || undefined;
  }

  @Get('id')
  getById(@Param('id') id: string) {
    return id || undefined;
  }

  @Post()
  create() {
    return {};
  }

  @Put()
  change() {
    return {};
  }


  @Delete()
  delete() {
    return null;
  }
}
