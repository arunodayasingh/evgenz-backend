import { Controller, Get, Param, Query } from '@nestjs/common';
import { ModelService } from './model.service';
import { ApiQuery, ApiParam } from '@nestjs/swagger';

@Controller('model')
export class ModelController {
    constructor(private readonly modelService: ModelService) { }

    @Get()
    @ApiQuery({ name: 'categorySlug', required: true })
    @ApiQuery({ name: 'brandSlug', required: true })
    @ApiQuery({ name: 'langCode', required: true })
    findAll(
        @Query('categorySlug') categorySlug: string,
        @Query('brandSlug') brandSlug: string,
        @Query('langCode') langCode: string,
    ) {
        return this.modelService.findAll({ categorySlug, brandSlug, langCode });
    }

    @Get('index')
    @ApiQuery({ name: 'modelSlug', required: true })
    @ApiQuery({ name: 'categorySlug', required: true })
    @ApiQuery({ name: 'brandSlug', required: true })
    @ApiQuery({ name: 'langCode', required: true })
    findOne(
        @Query('modelSlug') modelSlug: string,
        @Query('categorySlug') categorySlug: string,
        @Query('brandSlug') brandSlug: string,
        @Query('langCode') langCode: string,
    ) {
        return this.modelService.findOne({ categorySlug, brandSlug, modelSlug, langCode });
    }
}
