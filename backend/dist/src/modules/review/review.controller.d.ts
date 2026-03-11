import { ReviewService } from './review.service';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    create(createReviewDto: any): Promise<{
        id: number;
        createdAt: Date;
        modelId: number;
        rating: number;
        pros: string | null;
        cons: string | null;
        reviewText: string | null;
    }>;
    findByModelSlug(categorySlug: string, brandSlug: string, modelSlug: string): Promise<{
        id: number;
        createdAt: Date;
        modelId: number;
        rating: number;
        pros: string | null;
        cons: string | null;
        reviewText: string | null;
    }[]>;
}
