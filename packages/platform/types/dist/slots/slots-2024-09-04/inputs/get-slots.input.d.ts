import { SlotFormat } from "@calcom/platform-enums";
declare class GetAvailableSlotsInput_2024_09_04 {
    start: string;
    end: string;
    timeZone?: string;
    duration?: number;
    format?: SlotFormat;
}
export declare class ById_2024_09_04 extends GetAvailableSlotsInput_2024_09_04 {
    eventTypeId: number;
}
export declare class BySlug_2024_09_04 extends GetAvailableSlotsInput_2024_09_04 {
    eventTypeSlug: string;
    username: string;
    organizationSlug?: string;
}
export declare class ByUsernames_2024_09_04 extends GetAvailableSlotsInput_2024_09_04 {
    usernames: string[];
    organizationSlug: string;
}
export {};
//# sourceMappingURL=get-slots.input.d.ts.map