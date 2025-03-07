import type { ValidationOptions } from "class-validator";
import { PhoneFieldInput_2024_06_14, AddressFieldInput_2024_06_14, TextFieldInput_2024_06_14, NumberFieldInput_2024_06_14, TextAreaFieldInput_2024_06_14, SelectFieldInput_2024_06_14, MultiSelectFieldInput_2024_06_14, MultiEmailFieldInput_2024_06_14, CheckboxGroupFieldInput_2024_06_14, RadioGroupFieldInput_2024_06_14, BooleanFieldInput_2024_06_14, NameDefaultFieldInput_2024_06_14, EmailDefaultFieldInput_2024_06_14, GuestsDefaultFieldInput_2024_06_14, NotesDefaultFieldInput_2024_06_14, RescheduleReasonDefaultFieldInput_2024_06_14, TitleDefaultFieldInput_2024_06_14, SplitNameDefaultFieldInput_2024_06_14 } from "../inputs";
export declare class NameDefaultFieldOutput_2024_06_14 extends NameDefaultFieldInput_2024_06_14 {
    isDefault: boolean;
    slug: "name";
    type: "name";
    required: boolean;
}
export declare class SplitNameDefaultFieldOutput_2024_06_14 extends SplitNameDefaultFieldInput_2024_06_14 {
    isDefault: boolean;
    slug: "splitName";
    type: "splitName";
}
export declare class EmailDefaultFieldOutput_2024_06_14 extends EmailDefaultFieldInput_2024_06_14 {
    isDefault: boolean;
    slug: "email";
    type: "email";
    required: boolean;
}
export declare class LocationDefaultFieldOutput_2024_06_14 {
    isDefault: boolean;
    slug: "location";
    type: "radioInput";
    required: boolean;
    hidden: boolean;
}
export declare class RescheduleReasonDefaultFieldOutput_2024_06_14 extends RescheduleReasonDefaultFieldInput_2024_06_14 {
    isDefault: boolean;
    slug: "rescheduleReason";
    type: "textarea";
    required: boolean;
    hidden: boolean;
    label?: string;
    placeholder?: string;
    disableOnPrefill: boolean;
}
export declare class TitleDefaultFieldOutput_2024_06_14 extends TitleDefaultFieldInput_2024_06_14 {
    isDefault: boolean;
    slug: "title";
    type: "text";
    required: boolean;
    hidden: boolean;
    label?: string;
    placeholder?: string;
    disableOnPrefill: boolean;
}
export declare class NotesDefaultFieldOutput_2024_06_14 extends NotesDefaultFieldInput_2024_06_14 {
    isDefault: boolean;
    slug: "notes";
    type: "textarea";
    required: boolean;
    hidden: boolean;
    label?: string;
    placeholder?: string;
    disableOnPrefill: boolean;
}
export declare class GuestsDefaultFieldOutput_2024_06_14 extends GuestsDefaultFieldInput_2024_06_14 {
    isDefault: boolean;
    slug: "guests";
    type: "multiemail";
    required: boolean;
    hidden: boolean;
    label?: string;
    placeholder?: string;
    disableOnPrefill: boolean;
}
export declare class PhoneDefaultFieldOutput_2024_06_14 {
    isDefault: boolean;
    slug: "attendeePhoneNumber";
    type: "phone";
    required: boolean;
    hidden: boolean;
    label?: string;
    placeholder?: string;
    disableOnPrefill: boolean;
}
export declare class PhoneFieldOutput_2024_06_14 extends PhoneFieldInput_2024_06_14 {
    isDefault: boolean;
    hidden: boolean;
}
export declare class AddressFieldOutput_2024_06_14 extends AddressFieldInput_2024_06_14 {
    isDefault: boolean;
    hidden: boolean;
}
export declare class TextFieldOutput_2024_06_14 extends TextFieldInput_2024_06_14 {
    isDefault: boolean;
    hidden: boolean;
}
export declare class NumberFieldOutput_2024_06_14 extends NumberFieldInput_2024_06_14 {
    isDefault: boolean;
    hidden: boolean;
}
export declare class TextAreaFieldOutput_2024_06_14 extends TextAreaFieldInput_2024_06_14 {
    isDefault: boolean;
    hidden: boolean;
}
export declare class SelectFieldOutput_2024_06_14 extends SelectFieldInput_2024_06_14 {
    isDefault: boolean;
    hidden: boolean;
}
export declare class MultiSelectFieldOutput_2024_06_14 extends MultiSelectFieldInput_2024_06_14 {
    isDefault: boolean;
    hidden: boolean;
}
export declare class MultiEmailFieldOutput_2024_06_14 extends MultiEmailFieldInput_2024_06_14 {
    isDefault: boolean;
    hidden: boolean;
}
export declare class CheckboxGroupFieldOutput_2024_06_14 extends CheckboxGroupFieldInput_2024_06_14 {
    isDefault: boolean;
    hidden: boolean;
}
export declare class RadioGroupFieldOutput_2024_06_14 extends RadioGroupFieldInput_2024_06_14 {
    isDefault: boolean;
    hidden: boolean;
}
export declare class BooleanFieldOutput_2024_06_14 extends BooleanFieldInput_2024_06_14 {
    isDefault: boolean;
    hidden: boolean;
}
export declare class OutputUnknownBookingField_2024_06_14 {
    type: "unknown";
    slug: "unknown";
    bookingField: string;
}
export type DefaultFieldOutput_2024_06_14 = NameDefaultFieldOutput_2024_06_14 | SplitNameDefaultFieldOutput_2024_06_14 | EmailDefaultFieldOutput_2024_06_14 | LocationDefaultFieldOutput_2024_06_14 | RescheduleReasonDefaultFieldOutput_2024_06_14 | TitleDefaultFieldOutput_2024_06_14 | NotesDefaultFieldOutput_2024_06_14 | GuestsDefaultFieldOutput_2024_06_14 | PhoneDefaultFieldOutput_2024_06_14;
export type CustomFieldOutput_2024_06_14 = PhoneFieldOutput_2024_06_14 | AddressFieldOutput_2024_06_14 | TextFieldOutput_2024_06_14 | NumberFieldOutput_2024_06_14 | TextAreaFieldOutput_2024_06_14 | SelectFieldOutput_2024_06_14 | MultiSelectFieldOutput_2024_06_14 | MultiEmailFieldOutput_2024_06_14 | CheckboxGroupFieldOutput_2024_06_14 | RadioGroupFieldOutput_2024_06_14 | BooleanFieldOutput_2024_06_14;
export type KnownBookingField_2024_06_14 = DefaultFieldOutput_2024_06_14 | CustomFieldOutput_2024_06_14;
export type OutputBookingField_2024_06_14 = DefaultFieldOutput_2024_06_14 | CustomFieldOutput_2024_06_14 | OutputUnknownBookingField_2024_06_14;
export declare function ValidateOutputBookingFields_2024_06_14(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
//# sourceMappingURL=booking-fields.output.d.ts.map