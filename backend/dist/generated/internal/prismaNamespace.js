"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOrder = exports.UserScalarFieldEnum = exports.SeoMetadataScalarFieldEnum = exports.ArticleTranslationScalarFieldEnum = exports.ArticleScalarFieldEnum = exports.ChargingStationTranslationScalarFieldEnum = exports.ChargingStationScalarFieldEnum = exports.CityScalarFieldEnum = exports.StateScalarFieldEnum = exports.ReviewScalarFieldEnum = exports.ImageScalarFieldEnum = exports.VariantFeatureScalarFieldEnum = exports.FeatureScalarFieldEnum = exports.FeatureGroupScalarFieldEnum = exports.VariantSpecScalarFieldEnum = exports.BatteryPackSpecScalarFieldEnum = exports.SpecificationTranslationScalarFieldEnum = exports.SpecificationScalarFieldEnum = exports.VariantScalarFieldEnum = exports.BatteryPackScalarFieldEnum = exports.ModelTranslationScalarFieldEnum = exports.ModelScalarFieldEnum = exports.BrandTranslationScalarFieldEnum = exports.BrandScalarFieldEnum = exports.BodyTypeTranslationScalarFieldEnum = exports.BodyTypeScalarFieldEnum = exports.FuelTypeTranslationScalarFieldEnum = exports.FuelTypeScalarFieldEnum = exports.CategoryTranslationScalarFieldEnum = exports.CategoryScalarFieldEnum = exports.LanguageScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
exports.defineExtension = exports.UserOrderByRelevanceFieldEnum = exports.SeoMetadataOrderByRelevanceFieldEnum = exports.ArticleTranslationOrderByRelevanceFieldEnum = exports.ArticleOrderByRelevanceFieldEnum = exports.ChargingStationTranslationOrderByRelevanceFieldEnum = exports.ChargingStationOrderByRelevanceFieldEnum = exports.CityOrderByRelevanceFieldEnum = exports.StateOrderByRelevanceFieldEnum = exports.ReviewOrderByRelevanceFieldEnum = exports.ImageOrderByRelevanceFieldEnum = exports.FeatureOrderByRelevanceFieldEnum = exports.FeatureGroupOrderByRelevanceFieldEnum = exports.VariantSpecOrderByRelevanceFieldEnum = exports.BatteryPackSpecOrderByRelevanceFieldEnum = exports.SpecificationTranslationOrderByRelevanceFieldEnum = exports.SpecificationOrderByRelevanceFieldEnum = exports.VariantOrderByRelevanceFieldEnum = exports.BatteryPackOrderByRelevanceFieldEnum = exports.ModelTranslationOrderByRelevanceFieldEnum = exports.ModelOrderByRelevanceFieldEnum = exports.BrandTranslationOrderByRelevanceFieldEnum = exports.BrandOrderByRelevanceFieldEnum = exports.BodyTypeTranslationOrderByRelevanceFieldEnum = exports.BodyTypeOrderByRelevanceFieldEnum = exports.FuelTypeTranslationOrderByRelevanceFieldEnum = exports.FuelTypeOrderByRelevanceFieldEnum = exports.CategoryTranslationOrderByRelevanceFieldEnum = exports.NullsOrder = exports.CategoryOrderByRelevanceFieldEnum = exports.LanguageOrderByRelevanceFieldEnum = void 0;
const runtime = require("@prisma/client/runtime/client");
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.4.2",
    engine: "94a226be1cf2967af2541cca5529f0f7ba866919"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Language: 'Language',
    Category: 'Category',
    CategoryTranslation: 'CategoryTranslation',
    FuelType: 'FuelType',
    FuelTypeTranslation: 'FuelTypeTranslation',
    BodyType: 'BodyType',
    BodyTypeTranslation: 'BodyTypeTranslation',
    Brand: 'Brand',
    BrandTranslation: 'BrandTranslation',
    Model: 'Model',
    ModelTranslation: 'ModelTranslation',
    BatteryPack: 'BatteryPack',
    Variant: 'Variant',
    Specification: 'Specification',
    SpecificationTranslation: 'SpecificationTranslation',
    BatteryPackSpec: 'BatteryPackSpec',
    VariantSpec: 'VariantSpec',
    FeatureGroup: 'FeatureGroup',
    Feature: 'Feature',
    VariantFeature: 'VariantFeature',
    Image: 'Image',
    Review: 'Review',
    State: 'State',
    City: 'City',
    ChargingStation: 'ChargingStation',
    ChargingStationTranslation: 'ChargingStationTranslation',
    Article: 'Article',
    ArticleTranslation: 'ArticleTranslation',
    SeoMetadata: 'SeoMetadata',
    User: 'User'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.LanguageScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    isDefault: 'isDefault',
    isActive: 'isActive'
};
exports.CategoryScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CategoryTranslationScalarFieldEnum = {
    id: 'id',
    categoryId: 'categoryId',
    languageId: 'languageId',
    name: 'name',
    description: 'description'
};
exports.FuelTypeScalarFieldEnum = {
    id: 'id',
    code: 'code',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.FuelTypeTranslationScalarFieldEnum = {
    id: 'id',
    fuelTypeId: 'fuelTypeId',
    languageId: 'languageId',
    name: 'name'
};
exports.BodyTypeScalarFieldEnum = {
    id: 'id',
    code: 'code',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.BodyTypeTranslationScalarFieldEnum = {
    id: 'id',
    bodyTypeId: 'bodyTypeId',
    languageId: 'languageId',
    name: 'name'
};
exports.BrandScalarFieldEnum = {
    id: 'id',
    categoryId: 'categoryId',
    slug: 'slug',
    logo: 'logo',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.BrandTranslationScalarFieldEnum = {
    id: 'id',
    brandId: 'brandId',
    languageId: 'languageId',
    name: 'name',
    description: 'description'
};
exports.ModelScalarFieldEnum = {
    id: 'id',
    brandId: 'brandId',
    categoryId: 'categoryId',
    fuelTypeId: 'fuelTypeId',
    bodyTypeId: 'bodyTypeId',
    slug: 'slug',
    status: 'status',
    expectedLaunchDate: 'expectedLaunchDate',
    launchDate: 'launchDate',
    name: 'name',
    description: 'description',
    images: 'images',
    isFeatured: 'isFeatured',
    isPopular: 'isPopular',
    isTrending: 'isTrending',
    isBestSeller: 'isBestSeller',
    isRecommended: 'isRecommended',
    isTopRated: 'isTopRated',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ModelTranslationScalarFieldEnum = {
    id: 'id',
    modelId: 'modelId',
    languageId: 'languageId',
    name: 'name',
    description: 'description'
};
exports.BatteryPackScalarFieldEnum = {
    id: 'id',
    modelId: 'modelId',
    name: 'name',
    batteryCapacity: 'batteryCapacity',
    rangeKm: 'rangeKm',
    motorPowerKw: 'motorPowerKw',
    chargingTimeHours: 'chargingTimeHours',
    fastCharging: 'fastCharging',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.VariantScalarFieldEnum = {
    id: 'id',
    modelId: 'modelId',
    batteryPackId: 'batteryPackId',
    name: 'name',
    slug: 'slug',
    price: 'price',
    topSpeed: 'topSpeed',
    acceleration0100: 'acceleration0100',
    launchYear: 'launchYear',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SpecificationScalarFieldEnum = {
    id: 'id',
    modelId: 'modelId',
    key: 'key',
    isActive: 'isActive'
};
exports.SpecificationTranslationScalarFieldEnum = {
    id: 'id',
    specificationId: 'specificationId',
    languageId: 'languageId',
    value: 'value'
};
exports.BatteryPackSpecScalarFieldEnum = {
    id: 'id',
    batteryPackId: 'batteryPackId',
    key: 'key',
    value: 'value',
    unit: 'unit'
};
exports.VariantSpecScalarFieldEnum = {
    id: 'id',
    variantId: 'variantId',
    key: 'key',
    value: 'value',
    unit: 'unit'
};
exports.FeatureGroupScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.FeatureScalarFieldEnum = {
    id: 'id',
    featureGroupId: 'featureGroupId',
    name: 'name'
};
exports.VariantFeatureScalarFieldEnum = {
    variantId: 'variantId',
    featureId: 'featureId'
};
exports.ImageScalarFieldEnum = {
    id: 'id',
    entityType: 'entityType',
    entityId: 'entityId',
    imageUrl: 'imageUrl',
    isPrimary: 'isPrimary',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
};
exports.ReviewScalarFieldEnum = {
    id: 'id',
    modelId: 'modelId',
    rating: 'rating',
    pros: 'pros',
    cons: 'cons',
    reviewText: 'reviewText',
    createdAt: 'createdAt'
};
exports.StateScalarFieldEnum = {
    id: 'id',
    name: 'name',
    code: 'code',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CityScalarFieldEnum = {
    id: 'id',
    name: 'name',
    stateId: 'stateId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ChargingStationScalarFieldEnum = {
    id: 'id',
    name: 'name',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    operator: 'operator',
    connectorType: 'connectorType',
    chargingSpeed: 'chargingSpeed',
    cityId: 'cityId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ChargingStationTranslationScalarFieldEnum = {
    id: 'id',
    chargingStationId: 'chargingStationId',
    languageId: 'languageId',
    name: 'name',
    address: 'address'
};
exports.ArticleScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ArticleTranslationScalarFieldEnum = {
    id: 'id',
    articleId: 'articleId',
    languageId: 'languageId',
    title: 'title',
    content: 'content'
};
exports.SeoMetadataScalarFieldEnum = {
    id: 'id',
    entityType: 'entityType',
    entityId: 'entityId',
    title: 'title',
    description: 'description',
    keywords: 'keywords',
    isIndexable: 'isIndexable',
    h1Heading: 'h1Heading',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.LanguageOrderByRelevanceFieldEnum = {
    code: 'code',
    name: 'name'
};
exports.CategoryOrderByRelevanceFieldEnum = {
    slug: 'slug'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.CategoryTranslationOrderByRelevanceFieldEnum = {
    name: 'name',
    description: 'description'
};
exports.FuelTypeOrderByRelevanceFieldEnum = {
    code: 'code'
};
exports.FuelTypeTranslationOrderByRelevanceFieldEnum = {
    name: 'name'
};
exports.BodyTypeOrderByRelevanceFieldEnum = {
    code: 'code'
};
exports.BodyTypeTranslationOrderByRelevanceFieldEnum = {
    name: 'name'
};
exports.BrandOrderByRelevanceFieldEnum = {
    slug: 'slug',
    logo: 'logo'
};
exports.BrandTranslationOrderByRelevanceFieldEnum = {
    name: 'name',
    description: 'description'
};
exports.ModelOrderByRelevanceFieldEnum = {
    slug: 'slug',
    name: 'name',
    description: 'description',
    images: 'images'
};
exports.ModelTranslationOrderByRelevanceFieldEnum = {
    name: 'name',
    description: 'description'
};
exports.BatteryPackOrderByRelevanceFieldEnum = {
    name: 'name'
};
exports.VariantOrderByRelevanceFieldEnum = {
    name: 'name',
    slug: 'slug'
};
exports.SpecificationOrderByRelevanceFieldEnum = {
    key: 'key'
};
exports.SpecificationTranslationOrderByRelevanceFieldEnum = {
    value: 'value'
};
exports.BatteryPackSpecOrderByRelevanceFieldEnum = {
    key: 'key',
    value: 'value',
    unit: 'unit'
};
exports.VariantSpecOrderByRelevanceFieldEnum = {
    key: 'key',
    value: 'value',
    unit: 'unit'
};
exports.FeatureGroupOrderByRelevanceFieldEnum = {
    name: 'name'
};
exports.FeatureOrderByRelevanceFieldEnum = {
    name: 'name'
};
exports.ImageOrderByRelevanceFieldEnum = {
    imageUrl: 'imageUrl'
};
exports.ReviewOrderByRelevanceFieldEnum = {
    pros: 'pros',
    cons: 'cons',
    reviewText: 'reviewText'
};
exports.StateOrderByRelevanceFieldEnum = {
    name: 'name',
    code: 'code'
};
exports.CityOrderByRelevanceFieldEnum = {
    name: 'name'
};
exports.ChargingStationOrderByRelevanceFieldEnum = {
    name: 'name',
    address: 'address',
    operator: 'operator',
    connectorType: 'connectorType',
    chargingSpeed: 'chargingSpeed'
};
exports.ChargingStationTranslationOrderByRelevanceFieldEnum = {
    name: 'name',
    address: 'address'
};
exports.ArticleOrderByRelevanceFieldEnum = {
    slug: 'slug',
    imageUrl: 'imageUrl'
};
exports.ArticleTranslationOrderByRelevanceFieldEnum = {
    title: 'title',
    content: 'content'
};
exports.SeoMetadataOrderByRelevanceFieldEnum = {
    entityType: 'entityType',
    title: 'title',
    description: 'description',
    keywords: 'keywords',
    h1Heading: 'h1Heading'
};
exports.UserOrderByRelevanceFieldEnum = {
    email: 'email',
    password: 'password',
    name: 'name'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map