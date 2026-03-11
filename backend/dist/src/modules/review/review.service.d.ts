import { PrismaService } from '../../database/prisma.service';
export declare class ReviewService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): Promise<{
        id: number;
        createdAt: Date;
        modelId: number;
        rating: number;
        pros: string | null;
        cons: string | null;
        reviewText: string | null;
    }>;
    findByModelSlug(params: {
        categorySlug: string;
        brandSlug: string;
        modelSlug: string;
    }): Promise<{
        id: number;
        createdAt: Date;
        modelId: number;
        rating: number;
        pros: string | null;
        cons: string | null;
        reviewText: string | null;
    }[]>;
}
