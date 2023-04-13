import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';

@Controller('channel')
export class ChannelController {
  @Get(':id')
  async getByID(@Param(':id') id: string) {
    return id || undefined;
  }

  @Post()
  async create() {
    return {};
  }

  @Patch(':id')
  async join() {
    return {};
  }

  @Put(':id')
  async change() {
    return {};
  }

  @Delete(':id')
  async delete(): Promise<null> {
    return null;
  }

  @Post(':id')
  async leave(): Promise<null> {
    return null;
  }
}
