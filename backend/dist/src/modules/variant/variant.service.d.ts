import { PrismaService } from '../../database/prisma.service';
export declare class VariantService {
    private prisma;
    constructor(prisma: PrismaService);
    findByModelId(modelId: number): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        modelId: number;
        batteryPackId: number;
        price: number | null;
        topSpeed: number | null;
        acceleration0100: number | null;
        launchYear: number | null;
    }[]>;
}
