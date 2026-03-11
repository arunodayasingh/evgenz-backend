import { Controller, Get, Query } from '@nestjs/common';
import { ChargingStationService } from './charging-station.service';

@Controller('charging-stations')
export class ChargingStationController {
    constructor(private readonly chargingStationService: ChargingStationService) { }

    @Get()
    findAll(@Query('city') city?: string) {
        return this.chargingStationService.findAll(city);
    }
}
