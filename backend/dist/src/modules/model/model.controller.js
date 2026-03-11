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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelController = void 0;
const common_1 = require("@nestjs/common");
const model_service_1 = require("./model.service");
const swagger_1 = require("@nestjs/swagger");
let ModelController = class ModelController {
    modelService;
    constructor(modelService) {
        this.modelService = modelService;
    }
    findAll(categorySlug, brandSlug, langCode) {
        return this.modelService.findAll({ categorySlug, brandSlug, langCode });
    }
    findOne(modelSlug, categorySlug, brandSlug, langCode) {
        return this.modelService.findOne({ categorySlug, brandSlug, modelSlug, langCode });
    }
};
exports.ModelController = ModelController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'categorySlug', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'brandSlug', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'langCode', required: true }),
    __param(0, (0, common_1.Query)('categorySlug')),
    __param(1, (0, common_1.Query)('brandSlug')),
    __param(2, (0, common_1.Query)('langCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], ModelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('index'),
    (0, swagger_1.ApiQuery)({ name: 'modelSlug', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'categorySlug', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'brandSlug', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'langCode', required: true }),
    __param(0, (0, common_1.Query)('modelSlug')),
    __param(1, (0, common_1.Query)('categorySlug')),
    __param(2, (0, common_1.Query)('brandSlug')),
    __param(3, (0, common_1.Query)('langCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], ModelController.prototype, "findOne", null);
exports.ModelController = ModelController = __decorate([
    (0, common_1.Controller)('model'),
    __metadata("design:paramtypes", [model_service_1.ModelService])
], ModelController);
//# sourceMappingURL=model.controller.js.map