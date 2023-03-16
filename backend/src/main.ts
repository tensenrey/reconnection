import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async () =>
  await (
    await NestFactory.create(AppModule, { cors: { origin: 'http://localhost:5555' } })
  ).listen(4444, 'localhost'))();
