import { Module } from '@nestjs/common';
import { BodyTypeController } from './body-type.controller';
import { BodyTypeService } from './body-type.service';

@Module({
  controllers: [BodyTypeController],
  providers: [BodyTypeService]
})
export class BodyTypeModule {}
