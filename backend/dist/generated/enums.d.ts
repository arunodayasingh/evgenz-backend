export declare const ModelStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly UPCOMING: "UPCOMING";
    readonly NEW_LAUNCHED: "NEW_LAUNCHED";
};
export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus];
export declare const ImageEntityType: {
    readonly MODEL: "MODEL";
    readonly BATTERY_PACK: "BATTERY_PACK";
    readonly VARIANT: "VARIANT";
};
export type ImageEntityType = (typeof ImageEntityType)[keyof typeof ImageEntityType];
export declare const Role: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
