"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvToolsService = void 0;
const common_1 = require("@nestjs/common");
let EvToolsService = class EvToolsService {
    calculateSavings(data) {
        const { dailyDistance, electricityPrice, petrolPrice, vehicleMileage } = data;
        if (!dailyDistance || !electricityPrice || !petrolPrice || !vehicleMileage) {
            throw new common_1.BadRequestException('All fields are required: dailyDistance, electricityPrice, petrolPrice, vehicleMileage');
        }
        const evMileage = 7;
        const petrolCostPerKm = petrolPrice / vehicleMileage;
        const evCostPerKm = electricityPrice / evMileage;
        const dailySavings = (petrolCostPerKm - evCostPerKm) * dailyDistance;
        const monthlySavings = dailySavings * 30;
        const yearlySavings = dailySavings * 365;
        return {
            dailySavings: Math.round(dailySavings),
            monthlySavings: Math.round(monthlySavings),
            yearlySavings: Math.round(yearlySavings),
        };
    }
};
exports.EvToolsService = EvToolsService;
exports.EvToolsService = EvToolsService = __decorate([
    (0, common_1.Injectable)()
], EvToolsService);
//# sourceMappingURL=ev-tools.service.js.map