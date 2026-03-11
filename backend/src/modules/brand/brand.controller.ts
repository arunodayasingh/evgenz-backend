import { Controller, Get, Param, Query } from '@nestjs/common';
import { BrandService } from './brand.service';
import { ApiQuery, ApiParam } from '@nestjs/swagger';

@Controller('brands')
export class BrandController {
    constructor(private readonly brandService: BrandService) { }

    @Get()
    @ApiQuery({ name: 'categorySlug', required: true, description: 'Slug of the parent category' })
    @ApiQuery({ name: 'langCode', required: true, description: 'Language code, e.g. en' })
    @ApiQuery({ name: 'limit', required: false, description: 'Limit number of results', type: Number })
    findAll(
        @Query('categorySlug') categorySlug: string,
        @Query('langCode') langCode: string,
        @Query('limit') limit?: string
    ) {
        return this.brandService.findAll(categorySlug, langCode, limit);
    }
}
