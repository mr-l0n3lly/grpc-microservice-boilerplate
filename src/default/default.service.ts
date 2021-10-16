import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DefaultModel } from 'src/models/default.model';

@Injectable()
export class DefaultService {
  constructor(
    @InjectModel(DefaultModel) private defaultModel: typeof DefaultModel,
  ) {}

  async findAll(): Promise<DefaultModel[]> {
    return this.defaultModel.findAll({ raw: true});
  }

  async findOne(id: number): Promise<DefaultModel> {
    return this.defaultModel.findOne({
      raw: true,
      where: {
        id,
      },
    });
  }

  async createDefault(data: { name: string }): Promise<DefaultModel> {
    return this.defaultModel.create(data);
  }
}
