import type { ValidationOptions } from "class-validator";
export declare class NameDefaultFieldInput_2024_06_14 {
    type: "name";
    label?: string;
    placeholder?: string;
    disableOnPrefill?: boolean;
}
export declare class SplitNameDefaultFieldInput_2024_06_14 {
    type: "splitName";
    firstNameLabel?: string;
    firstNamePlaceholder?: string;
    lastNameLabel?: string;
    lastNamePlaceholder?: string;
    lastNameRequired?: boolean;
    disableOnPrefill?: boolean;
}
export declare class EmailDefaultFieldInput_2024_06_14 {
    type: "email";
    label?: string;
    required: boolean;
    placeholder?: string;
    disableOnPrefill?: boolean;
}
export declare class TitleDefaultFieldInput_2024_06_14 {
    slug: "title";
    required?: boolean;
    hidden?: boolean;
    label?: string;
    placeholder?: string;
    disableOnPrefill?: boolean;
}
export declare class NotesDefaultFieldInput_2024_06_14 {
    slug: "notes";
    required?: boolean;
    hidden?: boolean;
    label?: string;
    placeholder?: string;
    disableOnPrefill?: boolean;
}
export declare class GuestsDefaultFieldInput_2024_06_14 {
    slug: "guests";
    required?: boolean;
    hidden?: boolean;
    label?: string;
    placeholder?: string;
    disableOnPrefill?: boolean;
}
export declare class RescheduleReasonDefaultFieldInput_2024_06_14 {
    slug: "rescheduleReason";
    required?: boolean;
    hidden?: boolean;
    label?: string;
    placeholder?: string;
    disableOnPrefill?: boolean;
}
export declare class PhoneFieldInput_2024_06_14 {
    type: "phone";
    slug: string;
    label: string;
    required: boolean;
    placeholder?: string;
    disableOnPrefill?: boolean;
    hidden?: boolean;
}
export declare class AddressFieldInput_2024_06_14 {
    type: "address";
    slug: string;
    label: string;
    required: boolean;
    placeholder?: string;
    disableOnPrefill?: boolean;
    hidden?: boolean;
}
export declare class TextFieldInput_2024_06_14 {
    type: "text";
    slug: string;
    label: string;
    required: boolean;
    placeholder?: string;
    disableOnPrefill?: boolean;
    hidden?: boolean;
}
export declare class NumberFieldInput_2024_06_14 {
    type: "number";
    slug: string;
    label: string;
    required: boolean;
    placeholder?: string;
    disableOnPrefill?: boolean;
    hidden?: boolean;
}
export declare class TextAreaFieldInput_2024_06_14 {
    type: "textarea";
    slug: string;
    label: string;
    required: boolean;
    placeholder?: string;
    disableOnPrefill?: boolean;
    hidden?: boolean;
}
export declare class SelectFieldInput_2024_06_14 {
    type: "select";
    slug: string;
    label: string;
    required: boolean;
    placeholder?: string;
    options: string[];
    disableOnPrefill?: boolean;
    hidden?: boolean;
}
export declare class MultiSelectFieldInput_2024_06_14 {
    type: "multiselect";
    slug: string;
    label: string;
    required: boolean;
    options: string[];
    disableOnPrefill?: boolean;
    hidden?: boolean;
}
export declare class MultiEmailFieldInput_2024_06_14 {
    type: "multiemail";
    slug: string;
    label: string;
    required: boolean;
    placeholder?: string;
    disableOnPrefill?: boolean;
    hidden?: boolean;
}
export declare class CheckboxGroupFieldInput_2024_06_14 {
    type: "checkbox";
    slug: string;
    label: string;
    required: boolean;
    options: string[];
    disableOnPrefill?: boolean;
    hidden?: boolean;
}
export declare class RadioGroupFieldInput_2024_06_14 {
    type: "radio";
    slug: string;
    label: string;
    required: boolean;
    options: string[];
    disableOnPrefill?: boolean;
    hidden?: boolean;
}
export declare class BooleanFieldInput_2024_06_14 {
    type: "boolean";
    slug: string;
    label: string;
    required: boolean;
    disableOnPrefill?: boolean;
    hidden?: boolean;
}
type InputDefaultField_2024_06_14 = NameDefaultFieldInput_2024_06_14 | SplitNameDefaultFieldInput_2024_06_14 | EmailDefaultFieldInput_2024_06_14 | TitleDefaultFieldInput_2024_06_14 | NotesDefaultFieldInput_2024_06_14 | GuestsDefaultFieldInput_2024_06_14 | RescheduleReasonDefaultFieldInput_2024_06_14;
export type InputBookingField_2024_06_14 = InputDefaultField_2024_06_14 | PhoneFieldInput_2024_06_14 | AddressFieldInput_2024_06_14 | TextFieldInput_2024_06_14 | NumberFieldInput_2024_06_14 | TextAreaFieldInput_2024_06_14 | SelectFieldInput_2024_06_14 | MultiSelectFieldInput_2024_06_14 | MultiEmailFieldInput_2024_06_14 | CheckboxGroupFieldInput_2024_06_14 | RadioGroupFieldInput_2024_06_14 | BooleanFieldInput_2024_06_14;
export declare function ValidateInputBookingFields_2024_06_14(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export {};
//# sourceMappingURL=booking-fields.input.d.ts.map