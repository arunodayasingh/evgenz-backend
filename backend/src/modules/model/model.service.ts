import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ModelService {
    constructor(private prisma: PrismaService) { }

    async findAll(params: { categorySlug: string; brandSlug: string; langCode: string }) {
        if (!params.langCode || !params.categorySlug || !params.brandSlug) {
            throw new BadRequestException('categorySlug, brandSlug, and langCode query parameters are required');
        }
        const models = await this.prisma.model.findMany({
            where: {
                isActive: true,
                category: { slug: params.categorySlug },
                brand: { slug: params.brandSlug },
            },
            include: {
                translations: { where: { language: { code: params.langCode } } },
                brand: {
                    select: {
                        slug: true,
                        translations: {
                            where: { language: { code: params.langCode } },
                            select: { name: true, languageId: true },
                        },
                    },
                },
                category: { select: { slug: true } },
            },
            orderBy: { id: 'desc' },
        });

        return models.map((model: any) => {
            const translation = model.translations[0];
            const { translations, ...rest } = model;
            return {
                ...rest,
                name: translation?.name || `[Missing Translation: ${params.langCode}]`,
                description: translation?.description || null,
            };
        });
    }

    async findOne(params: { categorySlug: string; brandSlug: string; modelSlug: string; langCode: string }) {
        if (!params.langCode || !params.categorySlug || !params.brandSlug || !params.modelSlug) {
            throw new BadRequestException('categorySlug, brandSlug, modelSlug, and langCode query parameters are required');
        }
        const model = await this.prisma.model.findFirst({
            where: {
                slug: params.modelSlug,
                category: { slug: params.categorySlug },
                brand: { slug: params.brandSlug },
                isActive: true
            },
            include: {
                translations: { where: { language: { code: params.langCode } } },
                brand: {
                    include: {
                        translations: { where: { language: { code: params.langCode } } },
                    }
                },
                category: {
                    include: {
                        translations: { where: { language: { code: params.langCode } } },
                    }
                },
                fuelType: {
                    include: {
                        translations: { where: { language: { code: params.langCode } } },
                    }
                },
                bodyType: {
                    include: {
                        translations: { where: { language: { code: params.langCode } } },
                    }
                },
                specifications: {
                    include: {
                        translations: { where: { language: { code: params.langCode } } },
                    }
                },
                variants: { where: { isActive: true } },
                reviews: { orderBy: { createdAt: 'desc' } },
            },
        });

        if (!model) {
            throw new NotFoundException(`Model not found or mismatched routing identifiers`);
        }

        // Flatten main model translations
        const modelTranslation = model.translations[0];
        const { translations: mainTranslations, ...modelBody } = model as any;

        // Flatten nested relation translations in a generic manner
        const relationsToFlatten = ['brand', 'category', 'fuelType', 'bodyType'];
        for (const rel of relationsToFlatten) {
            if (modelBody[rel] && modelBody[rel].translations) {
                const tr = modelBody[rel].translations[0];
                modelBody[rel].name = tr?.name || `[Missing Translation]`;
                modelBody[rel].description = tr?.description || null;
                delete modelBody[rel].translations;
            }
        }

        // Flatten specifications translations
        if (modelBody.specifications) {
            modelBody.specifications = modelBody.specifications.map((spec: any) => {
                const specTr = spec.translations[0];
                const { translations, ...restSpec } = spec;
                return {
                    ...restSpec,
                    value: specTr?.value || `[Missing Value: ${params.langCode}]`
                };
            });
        }

        return {
            ...modelBody,
            name: modelTranslation?.name || `[Missing Translation: ${params.langCode}]`,
            description: modelTranslation?.description || null,
        };
    }
}
