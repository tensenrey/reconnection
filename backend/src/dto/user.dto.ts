import { IsString, IsEmail } from 'class-validator';

export class UserDTO {
  @IsString()
  id: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  avatar: string | null;

  @IsString()
  description: string | null;
}
