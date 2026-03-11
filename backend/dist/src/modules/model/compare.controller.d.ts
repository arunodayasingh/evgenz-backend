import { CompareService } from './compare.service';
export declare class CompareController {
    private readonly compareService;
    constructor(compareService: CompareService);
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
