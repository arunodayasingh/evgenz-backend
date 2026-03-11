"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelModule = void 0;
const common_1 = require("@nestjs/common");
const model_controller_1 = require("./model.controller");
const model_service_1 = require("./model.service");
const vehicles_controller_1 = require("./vehicles.controller");
const vehicles_service_1 = require("./vehicles.service");
const compare_controller_1 = require("./compare.controller");
const compare_service_1 = require("./compare.service");
const ev_tools_controller_1 = require("./ev-tools.controller");
const ev_tools_service_1 = require("./ev-tools.service");
let ModelModule = class ModelModule {
};
exports.ModelModule = ModelModule;
exports.ModelModule = ModelModule = __decorate([
    (0, common_1.Module)({
        controllers: [model_controller_1.ModelController, vehicles_controller_1.VehiclesController, compare_controller_1.CompareController, ev_tools_controller_1.EvToolsController],
        providers: [model_service_1.ModelService, vehicles_service_1.VehiclesService, compare_service_1.CompareService, ev_tools_service_1.EvToolsService]
    })
], ModelModule);
//# sourceMappingURL=model.module.js.map