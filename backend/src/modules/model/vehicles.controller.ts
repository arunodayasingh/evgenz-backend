import { Controller, Get, Query } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('vehicles')
export class VehiclesController {
    constructor(private readonly vehiclesService: VehiclesService) { }

    @Get()
    @ApiQuery({ name: 'langCode', required: true, description: 'Language code, e.g. en' })
    @ApiQuery({ name: 'brand', required: false })
    @ApiQuery({ name: 'bodyType', required: false })
    @ApiQuery({ name: 'fuelType', required: false })
    @ApiQuery({ name: 'priceMin', required: false, type: Number })
    @ApiQuery({ name: 'priceMax', required: false, type: Number })
    @ApiQuery({ name: 'page', required: false, type: Number })
    @ApiQuery({ name: 'limit', required: false, type: Number })
    searchVehicles(@Query() query: any) {
        return this.vehiclesService.searchVehicles(query);
    }
}
