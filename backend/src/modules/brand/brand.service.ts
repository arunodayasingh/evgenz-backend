import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class BrandService {
    constructor(private prisma: PrismaService) { }

    async findAll(categorySlug: string, langCode: string, limit?: string) {
        if (!langCode || !categorySlug) {
            throw new BadRequestException('categorySlug and langCode query parameters are required');
        }

        const category = await this.prisma.category.findUnique({ where: { slug: categorySlug } });
        if (!category) {
            throw new NotFoundException(`Category with slug ${categorySlug} not found`);
        }

        const takeLimit = limit && Number(limit) > 0 ? Number(limit) : undefined;

        const brands = await this.prisma.brand.findMany({
            where: { isActive: true, categoryId: category.id },
            ...(takeLimit && { take: takeLimit }),
            include: {
                translations: {
                    where: { language: { code: langCode } },
                },
                category: {
                    select: {
                        slug: true,
                        translations: {
                            where: { language: { code: langCode } },
                            select: { name: true, languageId: true },
                        },
                    },
                },
            },
            orderBy: { id: 'asc' },
        });

        return brands.map((brand: any) => {
            const translation = brand.translations[0];
            const categoryTranslation = brand.category?.translations?.[0];
            const { translations, ...rest } = brand;

            if (rest.category) {
                rest.category.name = categoryTranslation?.name || `[Missing Translation]`;
                delete rest.category.translations;
            }

            return {
                ...rest,
                name: translation?.name || `[Missing Translation: ${langCode}]`,
                description: translation?.description || null,
            };
        });
    }
}
