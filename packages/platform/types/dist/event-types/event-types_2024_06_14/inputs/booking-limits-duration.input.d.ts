import type { ValidationOptions } from "class-validator";
import type { Disabled_2024_06_14 } from "./disabled.input";
export declare class BaseBookingLimitsDuration_2024_06_14 {
    day?: number;
    week?: number;
    month?: number;
    year?: number;
    disabled?: boolean;
}
export type BookingLimitsDuration_2024_06_14 = BaseBookingLimitsDuration_2024_06_14 | Disabled_2024_06_14;
export declare function ValidateBookingLimistsDuration(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
//# sourceMappingURL=booking-limits-duration.input.d.ts.map