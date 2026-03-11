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
exports.CompareService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let CompareService = class CompareService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async compareVariants(ids) {
        if (!ids)
            throw new common_1.BadRequestException('Please provide variant ids, e.g., ?ids=1,2,3');
        const parsedIds = ids.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id));
        if (parsedIds.length === 0)
            throw new common_1.BadRequestException('Invalid variant ids provided');
        const variants = await this.prisma.variant.findMany({
            where: { id: { in: parsedIds } },
            include: {
                model: {
                    select: {
                        slug: true,
                        translations: { select: { name: true, languageId: true } },
                        brand: { select: { translations: { select: { name: true, languageId: true } } } }
                    }
                },
                batteryPack: true,
            }
        });
        return variants.map(v => ({
            id: v.id,
            name: v.name,
            modelSlug: v.model.slug,
            brandName: v.model.brand.translations[0]?.name,
            modelName: v.model.translations[0]?.name,
            price: v.price,
            range: v.batteryPack?.rangeKm,
            batteryCapacity: v.batteryPack?.batteryCapacity,
            chargingTime: v.batteryPack?.chargingTimeHours,
            motorPower: v.batteryPack?.motorPowerKw,
            topSpeed: v.topSpeed,
        }));
    }
};
exports.CompareService = CompareService;
exports.CompareService = CompareService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CompareService);
//# sourceMappingURL=compare.service.js.map