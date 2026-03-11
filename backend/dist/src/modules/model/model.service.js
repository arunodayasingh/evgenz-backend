"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let ModelService = class ModelService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(params) {
        if (!params.langCode || !params.categorySlug || !params.brandSlug) {
            throw new common_1.BadRequestException('categorySlug, brandSlug, and langCode query parameters are required');
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
        return models.map((model) => {
            const translation = model.translations[0];
            const { translations, ...rest } = model;
            return {
                ...rest,
                name: translation?.name || `[Missing Translation: ${params.langCode}]`,
                description: translation?.description || null,
            };
        });
    }
    async findOne(params) {
        if (!params.langCode || !params.categorySlug || !params.brandSlug || !params.modelSlug) {
            throw new common_1.BadRequestException('categorySlug, brandSlug, modelSlug, and langCode query parameters are required');
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
            throw new common_1.NotFoundException(`Model not found or mismatched routing identifiers`);
        }
        const modelTranslation = model.translations[0];
        const { translations: mainTranslations, ...modelBody } = model;
        const relationsToFlatten = ['brand', 'category', 'fuelType', 'bodyType'];
        for (const rel of relationsToFlatten) {
            if (modelBody[rel] && modelBody[rel].translations) {
                const tr = modelBody[rel].translations[0];
                modelBody[rel].name = tr?.name || `[Missing Translation]`;
                modelBody[rel].description = tr?.description || null;
                delete modelBody[rel].translations;
            }
        }
        if (modelBody.specifications) {
            modelBody.specifications = modelBody.specifications.map((spec) => {
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
};
exports.ModelService = ModelService;
exports.ModelService = ModelService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ModelService);
//# sourceMappingURL=model.service.js.map