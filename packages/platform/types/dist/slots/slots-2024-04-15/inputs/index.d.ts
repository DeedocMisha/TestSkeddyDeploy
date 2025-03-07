import { SlotFormat } from "@calcom/platform-enums";
export declare class GetAvailableSlotsInput_2024_04_15 {
    startTime: string;
    endTime: string;
    eventTypeId?: number;
    eventTypeSlug?: string;
    usernameList?: string[];
    debug?: boolean;
    duration?: number;
    rescheduleUid?: string | null;
    timeZone?: string;
    orgSlug?: string;
    slotFormat?: SlotFormat;
    skipContactOwner?: boolean;
    shouldServeCache?: boolean;
    routedTeamMemberIds?: number[];
    teamMemberEmail?: string;
}
export declare class RemoveSelectedSlotInput_2024_04_15 {
    uid?: string;
}
export declare class ReserveSlotInput_2024_04_15 {
    eventTypeId: number;
    slotUtcStartDate: string;
    slotUtcEndDate: string;
    bookingUid?: string;
}
//# sourceMappingURL=index.d.ts.map