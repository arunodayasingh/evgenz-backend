import { PrismaService } from '../../database/prisma.service';
export declare class ModelService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(params: {
        categorySlug: string;
        brandSlug: string;
        langCode: string;
    }): Promise<any[]>;
    findOne(params: {
        categorySlug: string;
        brandSlug: string;
        modelSlug: string;
        langCode: string;
    }): Promise<any>;
}
