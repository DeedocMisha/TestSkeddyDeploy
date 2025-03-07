import type { ValidationOptions } from "class-validator";
export declare const inputLocations: readonly ["address", "link", "integration", "phone", "attendeeAddress", "attendeePhone", "attendeeDefined"];
export declare class InputAddressLocation_2024_06_14 {
    type: "address";
    address: string;
    public: boolean;
}
export declare class InputLinkLocation_2024_06_14 {
    type: "link";
    link: string;
    public: boolean;
}
export declare const supportedIntegrations: readonly ["cal-video", "google-meet"];
export type Integration_2024_06_14 = (typeof supportedIntegrations)[number];
export declare class InputIntegrationLocation_2024_06_14 {
    type: "integration";
    integration: Integration_2024_06_14;
}
export declare class InputPhoneLocation_2024_06_14 {
    type: "phone";
    phone: string;
    public: boolean;
}
export declare class InputAttendeeAddressLocation_2024_06_14 {
    type: "attendeeAddress";
}
export declare class InputAttendeePhoneLocation_2024_06_14 {
    type: "attendeePhone";
}
export declare class InputAttendeeDefinedLocation_2024_06_14 {
    type: "attendeeDefined";
}
export type InputLocation_2024_06_14 = InputAddressLocation_2024_06_14 | InputLinkLocation_2024_06_14 | InputIntegrationLocation_2024_06_14 | InputPhoneLocation_2024_06_14 | InputAttendeeAddressLocation_2024_06_14 | InputAttendeePhoneLocation_2024_06_14 | InputAttendeeDefinedLocation_2024_06_14;
export declare function ValidateLocations_2024_06_14(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
//# sourceMappingURL=locations.input.d.ts.map