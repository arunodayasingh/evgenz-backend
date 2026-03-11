import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class VehiclesService {
    constructor(private prisma: PrismaService) { }

    async searchVehicles(query: any) {
        const {
            langCode,
            brand,
            priceMin,
            priceMax,
            fuelType,
            bodyType,
            rangeMin,
            batteryCapacityMin,
            launchYear,
            page = 1,
            limit = 10,
            sortBy = 'createdAt',
            sortOrder = 'desc',
        } = query;

        if (!langCode) {
            throw new Error('Language code (langCode) query parameter is required');
        }

        const where: Prisma.ModelWhereInput = {
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
                orderBy: { [sortBy as string]: sortOrder },
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

        const mappedData = data.map((model: any) => {
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
}
