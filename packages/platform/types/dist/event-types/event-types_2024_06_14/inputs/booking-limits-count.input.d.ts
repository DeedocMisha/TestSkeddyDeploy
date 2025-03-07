import type { ValidationOptions } from "class-validator";
import type { Disabled_2024_06_14 } from "./disabled.input";
export type BookingLimitsKeyOutputType_2024_06_14 = "PER_DAY" | "PER_WEEK" | "PER_MONTH" | "PER_YEAR";
export type BookingLimitsKeysInputType = "day" | "week" | "month" | "year";
export type TransformBookingLimitsSchema_2024_06_14 = {
    [K in BookingLimitsKeyOutputType_2024_06_14]?: number;
};
export declare class BaseBookingLimitsCount_2024_06_14 {
    day?: number;
    week?: number;
    month?: number;
    year?: number;
    disabled?: boolean;
}
export type BookingLimitsCount_2024_06_14 = BaseBookingLimitsCount_2024_06_14 | Disabled_2024_06_14;
export declare function ValidateBookingLimitsCount(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
//# sourceMappingURL=booking-limits-count.input.d.ts.map