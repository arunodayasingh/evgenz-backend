import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma.module';
import { LanguageModule } from './modules/language/language.module';
import { CategoryModule } from './modules/category/category.module';
import { FuelTypeModule } from './modules/fuel-type/fuel-type.module';
import { BodyTypeModule } from './modules/body-type/body-type.module';
import { BrandModule } from './modules/brand/brand.module';
import { ModelModule } from './modules/model/model.module';
import { VariantModule } from './modules/variant/variant.module';
import { SpecificationModule } from './modules/specification/specification.module';
import { ReviewModule } from './modules/review/review.module';
import { ChargingStationModule } from './modules/charging-station/charging-station.module';
import { ArticleModule } from './modules/article/article.module';
import { SeoModule } from './modules/seo/seo.module';
import { ImageModule } from './modules/image/image.module';

import { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-yet';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        store: await redisStore({
          url: configService.get<string>('REDIS_URL') || 'redis://localhost:6379',
          ttl: 3600000,
        }),
      }),
    }),
    PrismaModule,
    LanguageModule,
    CategoryModule,
    FuelTypeModule,
    BodyTypeModule,
    BrandModule,
    ModelModule,
    VariantModule,
    SpecificationModule,
    ReviewModule,
    ChargingStationModule,
    ArticleModule,
    SeoModule,
    ImageModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule { }
