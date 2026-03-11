import { Module } from '@nestjs/common';
import { ChargingStationController } from './charging-station.controller';
import { ChargingStationService } from './charging-station.service';

@Module({
  controllers: [ChargingStationController],
  providers: [ChargingStationService]
})
export class ChargingStationModule {}
