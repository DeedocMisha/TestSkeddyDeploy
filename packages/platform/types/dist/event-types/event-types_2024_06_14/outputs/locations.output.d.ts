import type { ValidationOptions } from "class-validator";
import { InputAddressLocation_2024_06_14, InputAttendeeAddressLocation_2024_06_14, InputAttendeeDefinedLocation_2024_06_14, InputAttendeePhoneLocation_2024_06_14, InputLinkLocation_2024_06_14, InputPhoneLocation_2024_06_14 } from "../inputs";
export declare class OutputAddressLocation_2024_06_14 extends InputAddressLocation_2024_06_14 {
}
export declare class OutputLinkLocation_2024_06_14 extends InputLinkLocation_2024_06_14 {
}
export declare class OutputPhoneLocation_2024_06_14 extends InputPhoneLocation_2024_06_14 {
}
export declare class OutputAttendeeAddressLocation_2024_06_14 extends InputAttendeeAddressLocation_2024_06_14 {
}
export declare class OutputAttendeePhoneLocation_2024_06_14 extends InputAttendeePhoneLocation_2024_06_14 {
}
export declare class OutputAttendeeDefinedLocation_2024_06_14 extends InputAttendeeDefinedLocation_2024_06_14 {
}
declare const integrationsValues: readonly ["cal-video", "google-meet", "zoom", "whereby-video", "whatsapp-video", "webex-video", "telegram-video", "tandem", "sylaps-video", "skype-video", "sirius-video", "signal-video", "shimmer-video", "salesroom-video", "roam-video", "riverside-video", "ping-video", "office365-video", "mirotalk-video", "jitsi", "jelly-video", "jelly-conferencing", "huddle", "facetime-video", "element-call-video", "eightxeight-video", "discord-video", "demodesk-video", "campsite-conferencing", "campfire-video", "around-video"];
export type OutputIntegration_2024_06_14 = (typeof integrationsValues)[number];
export declare class OutputIntegrationLocation_2024_06_14 {
    type: "integration";
    integration: OutputIntegration_2024_06_14;
    link?: string;
    credentialId?: number;
}
export declare class OutputConferencingLocation_2024_06_14 {
    type: "conferencing";
}
export declare class OutputUnknownLocation_2024_06_14 {
    type: "unknown";
    location: string;
}
export type OutputLocation_2024_06_14 = OutputAddressLocation_2024_06_14 | OutputLinkLocation_2024_06_14 | OutputIntegrationLocation_2024_06_14 | OutputPhoneLocation_2024_06_14 | OutputAttendeeAddressLocation_2024_06_14 | OutputAttendeePhoneLocation_2024_06_14 | OutputAttendeeDefinedLocation_2024_06_14 | OutputConferencingLocation_2024_06_14 | OutputUnknownLocation_2024_06_14;
export declare function ValidateOutputLocations_2024_06_14(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export {};
//# sourceMappingURL=locations.output.d.ts.map