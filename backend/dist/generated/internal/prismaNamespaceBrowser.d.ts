import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
export declare const ModelName: {
    readonly Language: "Language";
    readonly Category: "Category";
    readonly CategoryTranslation: "CategoryTranslation";
    readonly FuelType: "FuelType";
    readonly FuelTypeTranslation: "FuelTypeTranslation";
    readonly BodyType: "BodyType";
    readonly BodyTypeTranslation: "BodyTypeTranslation";
    readonly Brand: "Brand";
    readonly BrandTranslation: "BrandTranslation";
    readonly Model: "Model";
    readonly ModelTranslation: "ModelTranslation";
    readonly BatteryPack: "BatteryPack";
    readonly Variant: "Variant";
    readonly Specification: "Specification";
    readonly SpecificationTranslation: "SpecificationTranslation";
    readonly BatteryPackSpec: "BatteryPackSpec";
    readonly VariantSpec: "VariantSpec";
    readonly FeatureGroup: "FeatureGroup";
    readonly Feature: "Feature";
    readonly VariantFeature: "VariantFeature";
    readonly Image: "Image";
    readonly Review: "Review";
    readonly State: "State";
    readonly City: "City";
    readonly ChargingStation: "ChargingStation";
    readonly ChargingStationTranslation: "ChargingStationTranslation";
    readonly Article: "Article";
    readonly ArticleTranslation: "ArticleTranslation";
    readonly SeoMetadata: "SeoMetadata";
    readonly User: "User";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const LanguageScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly isDefault: "isDefault";
    readonly isActive: "isActive";
};
export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const CategoryTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly categoryId: "categoryId";
    readonly languageId: "languageId";
    readonly name: "name";
    readonly description: "description";
};
export type CategoryTranslationScalarFieldEnum = (typeof CategoryTranslationScalarFieldEnum)[keyof typeof CategoryTranslationScalarFieldEnum];
export declare const FuelTypeScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FuelTypeScalarFieldEnum = (typeof FuelTypeScalarFieldEnum)[keyof typeof FuelTypeScalarFieldEnum];
export declare const FuelTypeTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly fuelTypeId: "fuelTypeId";
    readonly languageId: "languageId";
    readonly name: "name";
};
export type FuelTypeTranslationScalarFieldEnum = (typeof FuelTypeTranslationScalarFieldEnum)[keyof typeof FuelTypeTranslationScalarFieldEnum];
export declare const BodyTypeScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BodyTypeScalarFieldEnum = (typeof BodyTypeScalarFieldEnum)[keyof typeof BodyTypeScalarFieldEnum];
export declare const BodyTypeTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly bodyTypeId: "bodyTypeId";
    readonly languageId: "languageId";
    readonly name: "name";
};
export type BodyTypeTranslationScalarFieldEnum = (typeof BodyTypeTranslationScalarFieldEnum)[keyof typeof BodyTypeTranslationScalarFieldEnum];
export declare const BrandScalarFieldEnum: {
    readonly id: "id";
    readonly categoryId: "categoryId";
    readonly slug: "slug";
    readonly logo: "logo";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum];
export declare const BrandTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly brandId: "brandId";
    readonly languageId: "languageId";
    readonly name: "name";
    readonly description: "description";
};
export type BrandTranslationScalarFieldEnum = (typeof BrandTranslationScalarFieldEnum)[keyof typeof BrandTranslationScalarFieldEnum];
export declare const ModelScalarFieldEnum: {
    readonly id: "id";
    readonly brandId: "brandId";
    readonly categoryId: "categoryId";
    readonly fuelTypeId: "fuelTypeId";
    readonly bodyTypeId: "bodyTypeId";
    readonly slug: "slug";
    readonly status: "status";
    readonly expectedLaunchDate: "expectedLaunchDate";
    readonly launchDate: "launchDate";
    readonly name: "name";
    readonly description: "description";
    readonly images: "images";
    readonly isFeatured: "isFeatured";
    readonly isPopular: "isPopular";
    readonly isTrending: "isTrending";
    readonly isBestSeller: "isBestSeller";
    readonly isRecommended: "isRecommended";
    readonly isTopRated: "isTopRated";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ModelScalarFieldEnum = (typeof ModelScalarFieldEnum)[keyof typeof ModelScalarFieldEnum];
export declare const ModelTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly modelId: "modelId";
    readonly languageId: "languageId";
    readonly name: "name";
    readonly description: "description";
};
export type ModelTranslationScalarFieldEnum = (typeof ModelTranslationScalarFieldEnum)[keyof typeof ModelTranslationScalarFieldEnum];
export declare const BatteryPackScalarFieldEnum: {
    readonly id: "id";
    readonly modelId: "modelId";
    readonly name: "name";
    readonly batteryCapacity: "batteryCapacity";
    readonly rangeKm: "rangeKm";
    readonly motorPowerKw: "motorPowerKw";
    readonly chargingTimeHours: "chargingTimeHours";
    readonly fastCharging: "fastCharging";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BatteryPackScalarFieldEnum = (typeof BatteryPackScalarFieldEnum)[keyof typeof BatteryPackScalarFieldEnum];
export declare const VariantScalarFieldEnum: {
    readonly id: "id";
    readonly modelId: "modelId";
    readonly batteryPackId: "batteryPackId";
    readonly name: "name";
    readonly slug: "slug";
    readonly price: "price";
    readonly topSpeed: "topSpeed";
    readonly acceleration0100: "acceleration0100";
    readonly launchYear: "launchYear";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VariantScalarFieldEnum = (typeof VariantScalarFieldEnum)[keyof typeof VariantScalarFieldEnum];
export declare const SpecificationScalarFieldEnum: {
    readonly id: "id";
    readonly modelId: "modelId";
    readonly key: "key";
    readonly isActive: "isActive";
};
export type SpecificationScalarFieldEnum = (typeof SpecificationScalarFieldEnum)[keyof typeof SpecificationScalarFieldEnum];
export declare const SpecificationTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly specificationId: "specificationId";
    readonly languageId: "languageId";
    readonly value: "value";
};
export type SpecificationTranslationScalarFieldEnum = (typeof SpecificationTranslationScalarFieldEnum)[keyof typeof SpecificationTranslationScalarFieldEnum];
export declare const BatteryPackSpecScalarFieldEnum: {
    readonly id: "id";
    readonly batteryPackId: "batteryPackId";
    readonly key: "key";
    readonly value: "value";
    readonly unit: "unit";
};
export type BatteryPackSpecScalarFieldEnum = (typeof BatteryPackSpecScalarFieldEnum)[keyof typeof BatteryPackSpecScalarFieldEnum];
export declare const VariantSpecScalarFieldEnum: {
    readonly id: "id";
    readonly variantId: "variantId";
    readonly key: "key";
    readonly value: "value";
    readonly unit: "unit";
};
export type VariantSpecScalarFieldEnum = (typeof VariantSpecScalarFieldEnum)[keyof typeof VariantSpecScalarFieldEnum];
export declare const FeatureGroupScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type FeatureGroupScalarFieldEnum = (typeof FeatureGroupScalarFieldEnum)[keyof typeof FeatureGroupScalarFieldEnum];
export declare const FeatureScalarFieldEnum: {
    readonly id: "id";
    readonly featureGroupId: "featureGroupId";
    readonly name: "name";
};
export type FeatureScalarFieldEnum = (typeof FeatureScalarFieldEnum)[keyof typeof FeatureScalarFieldEnum];
export declare const VariantFeatureScalarFieldEnum: {
    readonly variantId: "variantId";
    readonly featureId: "featureId";
};
export type VariantFeatureScalarFieldEnum = (typeof VariantFeatureScalarFieldEnum)[keyof typeof VariantFeatureScalarFieldEnum];
export declare const ImageScalarFieldEnum: {
    readonly id: "id";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly imageUrl: "imageUrl";
    readonly isPrimary: "isPrimary";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
};
export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly modelId: "modelId";
    readonly rating: "rating";
    readonly pros: "pros";
    readonly cons: "cons";
    readonly reviewText: "reviewText";
    readonly createdAt: "createdAt";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const StateScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum];
export declare const CityScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly stateId: "stateId";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum];
export declare const ChargingStationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly address: "address";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly operator: "operator";
    readonly connectorType: "connectorType";
    readonly chargingSpeed: "chargingSpeed";
    readonly cityId: "cityId";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ChargingStationScalarFieldEnum = (typeof ChargingStationScalarFieldEnum)[keyof typeof ChargingStationScalarFieldEnum];
export declare const ChargingStationTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly chargingStationId: "chargingStationId";
    readonly languageId: "languageId";
    readonly name: "name";
    readonly address: "address";
};
export type ChargingStationTranslationScalarFieldEnum = (typeof ChargingStationTranslationScalarFieldEnum)[keyof typeof ChargingStationTranslationScalarFieldEnum];
export declare const ArticleScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly imageUrl: "imageUrl";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum];
export declare const ArticleTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly articleId: "articleId";
    readonly languageId: "languageId";
    readonly title: "title";
    readonly content: "content";
};
export type ArticleTranslationScalarFieldEnum = (typeof ArticleTranslationScalarFieldEnum)[keyof typeof ArticleTranslationScalarFieldEnum];
export declare const SeoMetadataScalarFieldEnum: {
    readonly id: "id";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly title: "title";
    readonly description: "description";
    readonly keywords: "keywords";
    readonly isIndexable: "isIndexable";
    readonly h1Heading: "h1Heading";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SeoMetadataScalarFieldEnum = (typeof SeoMetadataScalarFieldEnum)[keyof typeof SeoMetadataScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly name: "name";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const LanguageOrderByRelevanceFieldEnum: {
    readonly code: "code";
    readonly name: "name";
};
export type LanguageOrderByRelevanceFieldEnum = (typeof LanguageOrderByRelevanceFieldEnum)[keyof typeof LanguageOrderByRelevanceFieldEnum];
export declare const CategoryOrderByRelevanceFieldEnum: {
    readonly slug: "slug";
};
export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const CategoryTranslationOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly description: "description";
};
export type CategoryTranslationOrderByRelevanceFieldEnum = (typeof CategoryTranslationOrderByRelevanceFieldEnum)[keyof typeof CategoryTranslationOrderByRelevanceFieldEnum];
export declare const FuelTypeOrderByRelevanceFieldEnum: {
    readonly code: "code";
};
export type FuelTypeOrderByRelevanceFieldEnum = (typeof FuelTypeOrderByRelevanceFieldEnum)[keyof typeof FuelTypeOrderByRelevanceFieldEnum];
export declare const FuelTypeTranslationOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type FuelTypeTranslationOrderByRelevanceFieldEnum = (typeof FuelTypeTranslationOrderByRelevanceFieldEnum)[keyof typeof FuelTypeTranslationOrderByRelevanceFieldEnum];
export declare const BodyTypeOrderByRelevanceFieldEnum: {
    readonly code: "code";
};
export type BodyTypeOrderByRelevanceFieldEnum = (typeof BodyTypeOrderByRelevanceFieldEnum)[keyof typeof BodyTypeOrderByRelevanceFieldEnum];
export declare const BodyTypeTranslationOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type BodyTypeTranslationOrderByRelevanceFieldEnum = (typeof BodyTypeTranslationOrderByRelevanceFieldEnum)[keyof typeof BodyTypeTranslationOrderByRelevanceFieldEnum];
export declare const BrandOrderByRelevanceFieldEnum: {
    readonly slug: "slug";
    readonly logo: "logo";
};
export type BrandOrderByRelevanceFieldEnum = (typeof BrandOrderByRelevanceFieldEnum)[keyof typeof BrandOrderByRelevanceFieldEnum];
export declare const BrandTranslationOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly description: "description";
};
export type BrandTranslationOrderByRelevanceFieldEnum = (typeof BrandTranslationOrderByRelevanceFieldEnum)[keyof typeof BrandTranslationOrderByRelevanceFieldEnum];
export declare const ModelOrderByRelevanceFieldEnum: {
    readonly slug: "slug";
    readonly name: "name";
    readonly description: "description";
    readonly images: "images";
};
export type ModelOrderByRelevanceFieldEnum = (typeof ModelOrderByRelevanceFieldEnum)[keyof typeof ModelOrderByRelevanceFieldEnum];
export declare const ModelTranslationOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly description: "description";
};
export type ModelTranslationOrderByRelevanceFieldEnum = (typeof ModelTranslationOrderByRelevanceFieldEnum)[keyof typeof ModelTranslationOrderByRelevanceFieldEnum];
export declare const BatteryPackOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type BatteryPackOrderByRelevanceFieldEnum = (typeof BatteryPackOrderByRelevanceFieldEnum)[keyof typeof BatteryPackOrderByRelevanceFieldEnum];
export declare const VariantOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly slug: "slug";
};
export type VariantOrderByRelevanceFieldEnum = (typeof VariantOrderByRelevanceFieldEnum)[keyof typeof VariantOrderByRelevanceFieldEnum];
export declare const SpecificationOrderByRelevanceFieldEnum: {
    readonly key: "key";
};
export type SpecificationOrderByRelevanceFieldEnum = (typeof SpecificationOrderByRelevanceFieldEnum)[keyof typeof SpecificationOrderByRelevanceFieldEnum];
export declare const SpecificationTranslationOrderByRelevanceFieldEnum: {
    readonly value: "value";
};
export type SpecificationTranslationOrderByRelevanceFieldEnum = (typeof SpecificationTranslationOrderByRelevanceFieldEnum)[keyof typeof SpecificationTranslationOrderByRelevanceFieldEnum];
export declare const BatteryPackSpecOrderByRelevanceFieldEnum: {
    readonly key: "key";
    readonly value: "value";
    readonly unit: "unit";
};
export type BatteryPackSpecOrderByRelevanceFieldEnum = (typeof BatteryPackSpecOrderByRelevanceFieldEnum)[keyof typeof BatteryPackSpecOrderByRelevanceFieldEnum];
export declare const VariantSpecOrderByRelevanceFieldEnum: {
    readonly key: "key";
    readonly value: "value";
    readonly unit: "unit";
};
export type VariantSpecOrderByRelevanceFieldEnum = (typeof VariantSpecOrderByRelevanceFieldEnum)[keyof typeof VariantSpecOrderByRelevanceFieldEnum];
export declare const FeatureGroupOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type FeatureGroupOrderByRelevanceFieldEnum = (typeof FeatureGroupOrderByRelevanceFieldEnum)[keyof typeof FeatureGroupOrderByRelevanceFieldEnum];
export declare const FeatureOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type FeatureOrderByRelevanceFieldEnum = (typeof FeatureOrderByRelevanceFieldEnum)[keyof typeof FeatureOrderByRelevanceFieldEnum];
export declare const ImageOrderByRelevanceFieldEnum: {
    readonly imageUrl: "imageUrl";
};
export type ImageOrderByRelevanceFieldEnum = (typeof ImageOrderByRelevanceFieldEnum)[keyof typeof ImageOrderByRelevanceFieldEnum];
export declare const ReviewOrderByRelevanceFieldEnum: {
    readonly pros: "pros";
    readonly cons: "cons";
    readonly reviewText: "reviewText";
};
export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum];
export declare const StateOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly code: "code";
};
export type StateOrderByRelevanceFieldEnum = (typeof StateOrderByRelevanceFieldEnum)[keyof typeof StateOrderByRelevanceFieldEnum];
export declare const CityOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type CityOrderByRelevanceFieldEnum = (typeof CityOrderByRelevanceFieldEnum)[keyof typeof CityOrderByRelevanceFieldEnum];
export declare const ChargingStationOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly address: "address";
    readonly operator: "operator";
    readonly connectorType: "connectorType";
    readonly chargingSpeed: "chargingSpeed";
};
export type ChargingStationOrderByRelevanceFieldEnum = (typeof ChargingStationOrderByRelevanceFieldEnum)[keyof typeof ChargingStationOrderByRelevanceFieldEnum];
export declare const ChargingStationTranslationOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly address: "address";
};
export type ChargingStationTranslationOrderByRelevanceFieldEnum = (typeof ChargingStationTranslationOrderByRelevanceFieldEnum)[keyof typeof ChargingStationTranslationOrderByRelevanceFieldEnum];
export declare const ArticleOrderByRelevanceFieldEnum: {
    readonly slug: "slug";
    readonly imageUrl: "imageUrl";
};
export type ArticleOrderByRelevanceFieldEnum = (typeof ArticleOrderByRelevanceFieldEnum)[keyof typeof ArticleOrderByRelevanceFieldEnum];
export declare const ArticleTranslationOrderByRelevanceFieldEnum: {
    readonly title: "title";
    readonly content: "content";
};
export type ArticleTranslationOrderByRelevanceFieldEnum = (typeof ArticleTranslationOrderByRelevanceFieldEnum)[keyof typeof ArticleTranslationOrderByRelevanceFieldEnum];
export declare const SeoMetadataOrderByRelevanceFieldEnum: {
    readonly entityType: "entityType";
    readonly title: "title";
    readonly description: "description";
    readonly keywords: "keywords";
    readonly h1Heading: "h1Heading";
};
export type SeoMetadataOrderByRelevanceFieldEnum = (typeof SeoMetadataOrderByRelevanceFieldEnum)[keyof typeof SeoMetadataOrderByRelevanceFieldEnum];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly email: "email";
    readonly password: "password";
    readonly name: "name";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
