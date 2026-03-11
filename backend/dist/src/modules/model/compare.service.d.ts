import { PrismaService } from '../../database/prisma.service';
export declare class CompareService {
    private prisma;
    constructor(prisma: PrismaService);
    compareVariants(ids: string): Promise<{
        id: number;
        name: string;
        modelSlug: string;
        brandName: string;
        modelName: string;
        price: number | null;
        range: number | null;
        batteryCapacity: number;
        chargingTime: number | null;
        motorPower: number | null;
        topSpeed: number | null;
    }[]>;
}
