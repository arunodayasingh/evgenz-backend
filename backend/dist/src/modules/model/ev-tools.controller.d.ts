import { EvToolsService } from './ev-tools.service';
export declare class EvToolsController {
    private readonly evToolsService;
    constructor(evToolsService: EvToolsService);
    calculateSavings(data: any): {
        dailySavings: number;
        monthlySavings: number;
        yearlySavings: number;
    };
}
