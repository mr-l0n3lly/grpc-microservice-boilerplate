import { DefaultService } from './default.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DefaultModel } from 'src/models/default.model';
import { DefaultController } from './default.controller';

@Module({
    imports: [SequelizeModule.forFeature([DefaultModel])],
    controllers: [DefaultController],
    providers: [DefaultService],
    exports: [DefaultService],
})
export class DefaultModule { }
