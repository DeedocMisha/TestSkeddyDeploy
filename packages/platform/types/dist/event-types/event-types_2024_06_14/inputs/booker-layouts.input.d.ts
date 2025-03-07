import type { ValidatorConstraintInterface } from "class-validator";
import { BookerLayoutsInputEnum_2024_06_14, type BookerLayoutsOutputEnum_2024_06_14 } from "@calcom/platform-enums";
export type BookerLayoutsTransformedSchema = {
    defaultLayout: BookerLayoutsOutputEnum_2024_06_14;
    enabledLayouts: BookerLayoutsOutputEnum_2024_06_14[];
};
export declare class LayoutValidator implements ValidatorConstraintInterface {
    validate(value: BookerLayoutsInputEnum_2024_06_14 | BookerLayoutsInputEnum_2024_06_14[]): boolean;
    defaultMessage(): string;
}
export declare class BookerLayouts_2024_06_14 {
    defaultLayout: BookerLayoutsInputEnum_2024_06_14;
    enabledLayouts: BookerLayoutsInputEnum_2024_06_14[];
}
//# sourceMappingURL=booker-layouts.input.d.ts.map