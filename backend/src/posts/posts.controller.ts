import { Controller, Get, Param } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  getAll() {
    return [];
  }

  @Get("id")
  getById(@Param("id") id: string) { 
    return id
  }
}
