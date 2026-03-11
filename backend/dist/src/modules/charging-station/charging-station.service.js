"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargingStationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let ChargingStationService = class ChargingStationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(city) {
        const where = { isActive: true };
        if (city) {
            where.city = { name: city };
        }
        return this.prisma.chargingStation.findMany({
            where,
            select: {
                id: true,
                city: { select: { name: true } },
                latitude: true,
                longitude: true,
                operator: true,
                connectorType: true,
                chargingSpeed: true,
                translations: { select: { name: true, address: true, languageId: true } }
            },
        });
    }
};
exports.ChargingStationService = ChargingStationService;
exports.ChargingStationService = ChargingStationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChargingStationService);
//# sourceMappingURL=charging-station.service.js.map