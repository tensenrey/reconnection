import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as favicon from 'serve-favicon';

import { join } from 'path';

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.setGlobalPrefix('api');
  app.useStaticAssets(join(__dirname, '..', 'static'));
  app.setViewEngine('html');
  // app.use(favicon(join(__dirname, '..', 'static/icon') + '/favicon.ico'));

  await app.listen(4444);
})();
