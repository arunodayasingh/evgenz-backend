import { Controller, Post, Body } from '@nestjs/common';
import { EvToolsService } from './ev-tools.service';

@Controller('ev-savings')
export class EvToolsController {
    constructor(private readonly evToolsService: EvToolsService) { }

    @Post()
    calculateSavings(@Body() data: any) {
        return this.evToolsService.calculateSavings(data);
    }
}
