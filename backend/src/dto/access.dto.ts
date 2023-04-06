import { IsBoolean } from "class-validator";

export class AccessDTO {
  @IsBoolean()
  access: boolean;
}
