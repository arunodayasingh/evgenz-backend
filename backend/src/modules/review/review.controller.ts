import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ApiQuery, ApiBody } from '@nestjs/swagger';

@Controller('reviews')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) { }

    @Post()
    @ApiBody({ description: 'Review object including parent slugs (categorySlug, brandSlug, modelSlug)' })
    create(@Body() createReviewDto: any) {
        return this.reviewService.create(createReviewDto);
    }

    @Get()
    @ApiQuery({ name: 'categorySlug', required: true })
    @ApiQuery({ name: 'brandSlug', required: true })
    @ApiQuery({ name: 'modelSlug', required: true })
    findByModelSlug(
        @Query('categorySlug') categorySlug: string,
        @Query('brandSlug') brandSlug: string,
        @Query('modelSlug') modelSlug: string,
    ) {
        return this.reviewService.findByModelSlug({ categorySlug, brandSlug, modelSlug });
    }
}
