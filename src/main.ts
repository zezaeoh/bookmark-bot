import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const nodEnv = process.env.NODE_ENV || 'development';
  const appName = process.env.APP || 'bookmark-bot';
  const port = process.env.PORT || '3000';

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  await app.listen(port);

  console.log(`${appName} started!, port → ${port}`);
}
bootstrap().catch(e => {
  console.error(e);
  process.exit(1);
});
