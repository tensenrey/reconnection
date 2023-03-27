import { IsJWT } from 'class-validator';

export class SessionDTO {
  @IsJWT()
  token: string;
}
