import { Controller, Get, Query } from '@nestjs/common';
import { CompareService } from './compare.service';

@Controller('compare')
export class CompareController {
    constructor(private readonly compareService: CompareService) { }

    @Get()
    compareVariants(@Query('ids') ids: string) {
        return this.compareService.compareVariants(ids);
    }
}
