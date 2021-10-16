import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DefaultModel } from 'src/models/default.model';
import { DefaultService } from './default.service';

@Controller('default')
export class DefaultController {

  constructor(private readonly defaultService: DefaultService) {}

  @GrpcMethod('DefaultService', 'findOne')
  findOne(data: { id: number }, metadata: any) {
    return this.defaultService.findOne(data.id);
  }

  @GrpcMethod('DefaultService', 'findAll')
  findAll(): Promise<DefaultModel[]> {
    return this.defaultService.findAll();
  }

  @GrpcMethod('DefaultService', 'create')
  async create(data: { name: string }): Promise<DefaultModel> {
    return this.defaultService.createDefault(data);
  }
}
