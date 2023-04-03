import { Param, Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get(':id')
  async getUserByEmail(@Param('id') id: string): Promise<UserDTO> {
    return await this.userService.getUserByID(id);
  }
}
