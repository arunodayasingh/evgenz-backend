import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class VariantService {
    constructor(private prisma: PrismaService) { }

    async findByModelId(modelId: number) {
        return this.prisma.variant.findMany({
            where: { modelId: Number(modelId), isActive: true },
            orderBy: { price: 'asc' },
        });
    }
}
