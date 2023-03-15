import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const MongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: configService.get('DATABASE_URI'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
};
