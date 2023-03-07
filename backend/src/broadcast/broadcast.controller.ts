import { Delete, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('broadcast')
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

  @Put('id')
  change() {
    return {};
  }

  @Delete('id')
  delete() {
    return null;
  }
}
