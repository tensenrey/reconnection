import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const JwtConfig = async (
  configService: ConfigService,
): Promise<JwtModuleOptions> => {
  return {
    secret: await configService.get('JWT_SECRET'),
  };
};
