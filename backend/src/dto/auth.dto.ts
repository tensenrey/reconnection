import { IsString, IsEmail } from 'class-validator';

export class AuthDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  repassword: string;
}
