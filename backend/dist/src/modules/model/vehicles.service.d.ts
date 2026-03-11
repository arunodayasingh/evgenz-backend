import { PrismaService } from '../../database/prisma.service';
export declare class VehiclesService {
    private prisma;
    constructor(prisma: PrismaService);
    searchVehicles(query: any): Promise<{
        data: any[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
}
