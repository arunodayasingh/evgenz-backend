import { Module } from '@nestjs/common';
import { ModelController } from './model.controller';
import { ModelService } from './model.service';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';
import { CompareController } from './compare.controller';
import { CompareService } from './compare.service';
import { EvToolsController } from './ev-tools.controller';
import { EvToolsService } from './ev-tools.service';

@Module({
  controllers: [ModelController, VehiclesController, CompareController, EvToolsController],
  providers: [ModelService, VehiclesService, CompareService, EvToolsService]
})
export class ModelModule { }
