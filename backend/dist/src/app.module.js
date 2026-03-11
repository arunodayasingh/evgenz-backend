"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./database/prisma.module");
const language_module_1 = require("./modules/language/language.module");
const category_module_1 = require("./modules/category/category.module");
const fuel_type_module_1 = require("./modules/fuel-type/fuel-type.module");
const body_type_module_1 = require("./modules/body-type/body-type.module");
const brand_module_1 = require("./modules/brand/brand.module");
const model_module_1 = require("./modules/model/model.module");
const variant_module_1 = require("./modules/variant/variant.module");
const specification_module_1 = require("./modules/specification/specification.module");
const review_module_1 = require("./modules/review/review.module");
const charging_station_module_1 = require("./modules/charging-station/charging-station.module");
const article_module_1 = require("./modules/article/article.module");
const seo_module_1 = require("./modules/seo/seo.module");
const image_module_1 = require("./modules/image/image.module");
const cache_manager_1 = require("@nestjs/cache-manager");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const cache_manager_redis_yet_1 = require("cache-manager-redis-yet");
const auth_module_1 = require("./modules/auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            cache_manager_1.CacheModule.registerAsync({
                isGlobal: true,
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    store: await (0, cache_manager_redis_yet_1.redisStore)({
                        url: configService.get('REDIS_URL') || 'redis://localhost:6379',
                        ttl: 3600000,
                    }),
                }),
            }),
            prisma_module_1.PrismaModule,
            language_module_1.LanguageModule,
            category_module_1.CategoryModule,
            fuel_type_module_1.FuelTypeModule,
            body_type_module_1.BodyTypeModule,
            brand_module_1.BrandModule,
            model_module_1.ModelModule,
            variant_module_1.VariantModule,
            specification_module_1.SpecificationModule,
            review_module_1.ReviewModule,
            charging_station_module_1.ChargingStationModule,
            article_module_1.ArticleModule,
            seo_module_1.SeoModule,
            image_module_1.ImageModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: cache_manager_1.CacheInterceptor,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map