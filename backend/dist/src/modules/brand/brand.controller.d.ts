import { BrandService } from './brand.service';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    findAll(categorySlug: string, langCode: string, limit?: string): Promise<any[]>;
}
