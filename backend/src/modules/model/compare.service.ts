import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class CompareService {
    constructor(private prisma: PrismaService) { }

    async compareVariants(ids: string) {
        if (!ids) throw new BadRequestException('Please provide variant ids, e.g., ?ids=1,2,3');

        const parsedIds = ids.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id));

        if (parsedIds.length === 0) throw new BadRequestException('Invalid variant ids provided');

        const variants = await this.prisma.variant.findMany({
            where: { id: { in: parsedIds } },
            include: {
                model: {
                    select: {
                        slug: true,
                        translations: { select: { name: true, languageId: true } },
                        brand: { select: { translations: { select: { name: true, languageId: true } } } }
                    }
                },
                batteryPack: true,
            }
        });

        return variants.map(v => ({
            id: v.id,
            name: v.name,
            modelSlug: v.model.slug,
            brandName: v.model.brand.translations[0]?.name,
            modelName: v.model.translations[0]?.name,
            price: v.price,
            range: v.batteryPack?.rangeKm,
            batteryCapacity: v.batteryPack?.batteryCapacity,
            chargingTime: v.batteryPack?.chargingTimeHours,
            motorPower: v.batteryPack?.motorPowerKw,
            topSpeed: v.topSpeed,
        }));
    }
}
