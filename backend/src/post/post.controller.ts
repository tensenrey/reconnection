import { Delete, Post, Controller, Get, Param, Put, Body } from '@nestjs/common';
import { PostDTO } from '../dto/post.dto';

@Controller('post')
export class PostsController {
  @Get()
  async getAll(): Promise<PostDTO[]> {
    return [] || undefined;
  }

  @Get(':id')
  async getById(@Param(':id') id: string): Promise<PostDTO> {
    return ;
  }

  @Post()
  async create(@Body() dto: PostDTO) {
    return {};
  }

  @Put(':id')
  async change(@Param(':id') id: string, @Body() dto: PostDTO) {
    return {};
  }

  @Delete(':id')
  async delete(@Param(':id') id: string): Promise<null> {
    return null;
  }
}
