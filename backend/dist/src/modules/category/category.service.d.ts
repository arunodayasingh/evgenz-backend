import { PrismaService } from '../../database/prisma.service';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(langCode: string): Promise<any[]>;
    findOne(slug: string, langCode: string): Promise<any>;
}
