import { PrismaService } from '../../database/prisma.service';
export declare class BrandService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(categorySlug: string, langCode: string, limit?: string): Promise<any[]>;
}
