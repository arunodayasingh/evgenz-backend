import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) { }

    async findAll(langCode: string) {
        if (!langCode) {
            throw new BadRequestException('Language code (langCode) query parameter is required');
        }

        const categories = await this.prisma.category.findMany({
            where: { isActive: true },
            include: {
                translations: {
                    where: { language: { code: langCode } },
                },
            },
            orderBy: { id: 'asc' },
        });

        // Map response to extract translated fields into the root
        return categories.map((category: any) => {
            const translation = category.translations[0];
            const { translations, ...rest } = category;
            return {
                ...rest,
                name: translation?.name || `[Missing Translation: ${langCode}]`,
                description: translation?.description || null,
            };
        });
    }

    async findOne(slug: string, langCode: string) {
        if (!langCode) {
            throw new BadRequestException('Language code (langCode) query parameter is required');
        }

        const category = await this.prisma.category.findUnique({
            where: { slug, isActive: true },
            include: {
                translations: {
                    where: { language: { code: langCode } },
                },
            },
        });

        if (!category) {
            throw new NotFoundException(`Category with slug ${slug} not found`);
        }

        const translation = category.translations[0];
        const { translations, ...rest } = category as any;

        return {
            ...rest,
            name: translation?.name || `[Missing Translation: ${langCode}]`,
            description: translation?.description || null,
        };
    }
}
