import { Module } from '@nestjs/common';
import { FuelTypeController } from './fuel-type.controller';
import { FuelTypeService } from './fuel-type.service';

@Module({
  controllers: [FuelTypeController],
  providers: [FuelTypeService]
})
export class FuelTypeModule {}
