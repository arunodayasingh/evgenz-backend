import { PrismaService } from '../../database/prisma.service';
export declare class ChargingStationService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(city?: string): Promise<{
        id: number;
        latitude: number | null;
        longitude: number | null;
        operator: string | null;
        connectorType: string | null;
        chargingSpeed: string | null;
        city: {
            name: string;
        };
        translations: {
            name: string;
            languageId: number;
            address: string | null;
        }[];
    }[]>;
}
