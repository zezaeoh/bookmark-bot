import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogLevel, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const nodEnv = process.env.NODE_ENV || 'development';
  const appName = process.env.APP || 'bookmark-bot';
  const port = process.env.PORT || '3000';

  const logLevels: LogLevel[] = ['error', 'warn', 'log'];
  if (nodEnv === 'development') logLevels.push('debug', 'verbose');

  const app = await NestFactory.create(AppModule, {
    logger: logLevels,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: nodEnv !== 'development',
      disableErrorMessages: nodEnv !== 'development',
    }),
  );
  await app.listen(port);

  console.log(`${appName} started!, port → ${port}`);
}
bootstrap().catch(e => {
  console.error(e);
  process.exit(1);
});
