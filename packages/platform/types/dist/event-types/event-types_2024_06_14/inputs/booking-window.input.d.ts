import type { ValidationOptions } from "class-validator";
import type { Disabled_2024_06_14 } from "./disabled.input";
export type BookingWindowPeriodInputType_2024_06_14 = "businessDays" | "calendarDays" | "range";
export type BookingWindowPeriodOutputType_2024_06_14 = "RANGE" | "ROLLING_WINDOW" | "ROLLING" | "UNLIMITED";
export type TransformFutureBookingsLimitSchema_2024_06_14 = {
    periodType: BookingWindowPeriodOutputType_2024_06_14;
    periodDays?: number;
    periodCountCalendarDays?: boolean;
    periodStartDate?: Date;
    periodEndDate?: Date;
};
declare class BookingWindowBase {
    type: BookingWindowPeriodInputType_2024_06_14;
}
export declare class BusinessDaysWindow_2024_06_14 extends BookingWindowBase {
    value: number;
    rolling?: boolean;
    disabled?: boolean;
}
export declare class CalendarDaysWindow_2024_06_14 extends BookingWindowBase {
    value: number;
    rolling?: boolean;
    disabled?: boolean;
}
export declare class RangeWindow_2024_06_14 extends BookingWindowBase {
    value: string[];
    disabled?: boolean;
}
export type BookingWindow_2024_06_14 = BusinessDaysWindow_2024_06_14 | CalendarDaysWindow_2024_06_14 | RangeWindow_2024_06_14 | Disabled_2024_06_14;
export declare function ValidateBookingWindow(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export {};
//# sourceMappingURL=booking-window.input.d.ts.map