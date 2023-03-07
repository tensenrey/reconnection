import { Delete, Post, Controller, Get, Param, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
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
