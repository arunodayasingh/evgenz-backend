import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ReviewService {
    constructor(private prisma: PrismaService) { }

    async create(data: any) {
        const { categorySlug, brandSlug, modelSlug, rating, pros, cons, reviewText } = data;

        if (!rating || !categorySlug || !brandSlug || !modelSlug) {
            throw new BadRequestException('categorySlug, brandSlug, modelSlug, and rating are required in the body');
        }

        const model = await this.prisma.model.findFirst({
            where: {
                slug: modelSlug,
                category: { slug: categorySlug },
                brand: { slug: brandSlug },
                isActive: true
            }
        });

        if (!model) {
            throw new NotFoundException('Model not found with the provided slugs');
        }

        return this.prisma.review.create({
            data: {
                modelId: model.id,
                rating: Number(rating),
                pros,
                cons,
                reviewText,
            },
        });
    }

    async findByModelSlug(params: { categorySlug: string; brandSlug: string; modelSlug: string }) {
        if (!params.categorySlug || !params.brandSlug || !params.modelSlug) {
            throw new BadRequestException('categorySlug, brandSlug, and modelSlug query parameters are required');
        }
        const model = await this.prisma.model.findFirst({
            where: {
                slug: params.modelSlug,
                category: { slug: params.categorySlug },
                brand: { slug: params.brandSlug },
                isActive: true
            }
        });

        if (!model) {
            throw new NotFoundException('Model not found with the provided slugs');
        }

        return this.prisma.review.findMany({
            where: { modelId: model.id },
            orderBy: { createdAt: 'desc' },
        });
    }
}
