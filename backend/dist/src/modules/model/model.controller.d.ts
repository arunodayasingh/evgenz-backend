import { ModelService } from './model.service';
export declare class ModelController {
    private readonly modelService;
    constructor(modelService: ModelService);
    findAll(categorySlug: string, brandSlug: string, langCode: string): Promise<any[]>;
    findOne(modelSlug: string, categorySlug: string, brandSlug: string, langCode: string): Promise<any>;
}
