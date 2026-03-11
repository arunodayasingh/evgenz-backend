import { ChargingStationService } from './charging-station.service';
export declare class ChargingStationController {
    private readonly chargingStationService;
    constructor(chargingStationService: ChargingStationService);
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
