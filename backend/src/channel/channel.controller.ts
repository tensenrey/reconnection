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
  @Get('id')
  getByID(@Param('id') id: string) {
    return id || undefined;
  }

  @Post()
  create() {
    return {};
  }

  @Patch('id')
  join() {
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

  @Post('id')
  leave() {
    return null;
  }
}
