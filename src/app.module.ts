import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DefaultModule } from './default/default.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'l@mbd@m3',
      autoLoadModels: true,
      database: 'default',
      synchronize: true,
    }),
    DefaultModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
