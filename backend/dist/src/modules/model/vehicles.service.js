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
exports.VehiclesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let VehiclesService = class VehiclesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async searchVehicles(query) {
        const { langCode, brand, priceMin, priceMax, fuelType, bodyType, rangeMin, batteryCapacityMin, launchYear, page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc', } = query;
        if (!langCode) {
            throw new Error('Language code (langCode) query parameter is required');
        }
        const where = {
            isActive: true,
        };
        if (brand) {
            where.brand = { slug: brand };
        }
        if (fuelType) {
            where.fuelType = { code: fuelType };
        }
        if (bodyType) {
            where.bodyType = { code: bodyType };
        }
        if (launchYear) {
            where.variants = {
                some: { launchYear: Number(launchYear) },
            };
        }
        if (priceMin || priceMax || rangeMin || batteryCapacityMin) {
            where.variants = {
                ...where.variants,
                some: {
                    ...where.variants?.some,
                    ...(priceMin && { price: { gte: Number(priceMin) } }),
                    ...(priceMax && { price: { lte: Number(priceMax) } }),
                    ...((rangeMin || batteryCapacityMin) && {
                        batteryPack: {
                            ...(rangeMin && { rangeKm: { gte: Number(rangeMin) } }),
                            ...(batteryCapacityMin && { batteryCapacity: { gte: Number(batteryCapacityMin) } }),
                        }
                    }),
                },
            };
        }
        const skip = (Number(page) - 1) * Number(limit);
        const [total, data] = await Promise.all([
            this.prisma.model.count({ where }),
            this.prisma.model.findMany({
                where,
                skip,
                take: Number(limit),
                orderBy: { [sortBy]: sortOrder },
                include: {
                    translations: { where: { language: { code: langCode } } },
                    brand: {
                        select: {
                            slug: true,
                            translations: {
                                where: { language: { code: langCode } },
                                select: { name: true, languageId: true }
                            }
                        }
                    },
                    category: { select: { slug: true } },
                    variants: { orderBy: { price: 'asc' }, take: 1 },
                },
            }),
        ]);
        const mappedData = data.map((model) => {
            const translation = model.translations?.[0];
            const brandTranslation = model.brand?.translations?.[0];
            const { translations, ...rest } = model;
            if (rest.brand) {
                rest.brand.name = brandTranslation?.name || `[Missing Translation]`;
                delete rest.brand.translations;
            }
            return {
                ...rest,
                name: translation?.name || `[Missing Translation: ${langCode}]`,
                description: translation?.description || null,
            };
        });
        return {
            data: mappedData,
            meta: {
                total,
                page: Number(page),
                limit: Number(limit),
                totalPages: Math.ceil(total / Number(limit)),
            },
        };
    }
};
exports.VehiclesService = VehiclesService;
exports.VehiclesService = VehiclesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VehiclesService);
//# sourceMappingURL=vehicles.service.js.map