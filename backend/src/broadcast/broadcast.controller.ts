import {
  Delete,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Body,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { BroadcastDTO } from '../dto/broadcast.dto';

@Controller('broadcast')
export class BroadcastsController {
  @UseGuards(JwtGuard)
  @Get()
  async getAll(): Promise<BroadcastDTO[]> {
    return [] || undefined;
  }

  @Get(':id')
  async getById(@Param(':id') id: string): Promise<BroadcastDTO> {
    return;
  }

  @Post()
  async create(@Body() dto: BroadcastDTO) {
    return {};
  }

  @Put(':id')
  async change(@Param(':id') id: string, @Body() dto: BroadcastDTO) {
    return {};
  }

  @Delete(':id')
  async delete(@Param(':id') id: string): Promise<null> {
    return null;
  }
}
