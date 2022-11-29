import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //allows me to call the endpoint even though nestjs is on a different
  //localhost address than my angular frontend
  //if this doesn't work, look into Cors more
  app.enableCors();
  await app.listen(3000);

}

bootstrap();
