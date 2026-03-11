import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ChargingStationService {
    constructor(private prisma: PrismaService) { }

    async findAll(city?: string) {
        const where: any = { isActive: true };
        if (city) {
            where.city = { name: city };
        }

        return this.prisma.chargingStation.findMany({
            where,
            select: {
                id: true,
                city: { select: { name: true } },
                latitude: true,
                longitude: true,
                operator: true,
                connectorType: true,
                chargingSpeed: true,
                translations: { select: { name: true, address: true, languageId: true } }
            },
        });
    }
}
