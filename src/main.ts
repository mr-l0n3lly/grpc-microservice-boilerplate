import { join } from 'path';

import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { INestMicroservice } from '@nestjs/common';

async function bootstrap() {
  console.log(join(__dirname, '.proto', 'default.proto'));

  const app: INestMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'default',
      protoPath: join(__dirname, '.proto', 'default.proto'),
    }
  });

  await app.listen();
}

bootstrap();
