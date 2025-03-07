import type { ValidatorConstraintInterface, ValidationOptions } from "class-validator";
import { ConfirmationPolicyEnum, NoticeThresholdUnitEnum } from "@calcom/platform-enums";
import type { Disabled_2024_06_14 } from "./disabled.input";
export declare class NoticeThreshold_2024_06_14 {
    unit: NoticeThresholdUnitEnum;
    count: number;
}
export declare class BaseConfirmationPolicy_2024_06_14 {
    type: ConfirmationPolicyEnum;
    noticeThreshold?: NoticeThreshold_2024_06_14;
    blockUnconfirmedBookingsInBooker: boolean;
    disabled?: boolean;
}
export type ConfirmationPolicy_2024_06_14 = BaseConfirmationPolicy_2024_06_14 | Disabled_2024_06_14;
export declare class ConfirmationPolicyValidator implements ValidatorConstraintInterface {
    validate(value: ConfirmationPolicy_2024_06_14): boolean;
    defaultMessage(): string;
}
export declare function ValidateConfirmationPolicy(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export type NoticeThresholdTransformedSchema = {
    unit: NoticeThresholdUnitEnum;
    time: number;
};
export type ConfirmationPolicyTransformedSchema = {
    requiresConfirmation: boolean;
    requiresConfirmationThreshold?: NoticeThresholdTransformedSchema;
    requiresConfirmationWillBlockSlot: boolean;
};
//# sourceMappingURL=confirmation-policy.input.d.ts.map