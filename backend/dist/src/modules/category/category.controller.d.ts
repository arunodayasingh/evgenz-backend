import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    findAll(langCode: string): Promise<any[]>;
    findOne(slug: string, langCode: string): Promise<any>;
}
