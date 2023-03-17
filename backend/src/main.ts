import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

(async () => {
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
      cors: { origin: 'http://localhost:5555' },
    });

  app.useStaticAssets(join(__dirname, '..', 'static'));
  app.setViewEngine('html');
  
  await app.listen(4444, 'localhost');
})();
