import { Controller, Get, Param, Post, Put, Delete, Patch } from '@nestjs/common';

@Controller('channel')
export class ChannelController {
  @Get('id')
  getByID(@Param('id') id: string) {
    return  id || undefined;
  }

  @Post()
  create() {
    return  {};
  }

  @Patch()
  join() {
    return {};
  }

  @Put()
  change() {
    return  {};
  }
  
  @Delete()
  delete() {
    return  null;
  }
}
