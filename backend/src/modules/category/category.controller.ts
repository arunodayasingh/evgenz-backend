import { Controller, Get, Param, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiQuery, ApiParam } from '@nestjs/swagger';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    @ApiQuery({ name: 'langCode', required: true, description: 'Language code, e.g. en' })
    findAll(@Query('langCode') langCode: string) {
        return this.categoryService.findAll(langCode);
    }

    @Get('detail')
    @ApiQuery({ name: 'slug', required: true, description: 'Category unique slug' })
    @ApiQuery({ name: 'langCode', required: true, description: 'Language code, e.g. en' })
    findOne(
        @Query('slug') slug: string,
        @Query('langCode') langCode: string
    ) {
        return this.categoryService.findOne(slug, langCode);
    }
}
