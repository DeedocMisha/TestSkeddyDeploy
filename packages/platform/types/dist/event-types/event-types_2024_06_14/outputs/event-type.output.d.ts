import type { BookingWindow_2024_06_14, BookingLimitsDuration_2024_06_14 } from "../inputs";
import { EventTypeColor_2024_06_14, Seats_2024_06_14, Host as TeamEventTypeHostInput } from "../inputs";
import { Recurrence_2024_06_14 } from "../inputs";
import { BookerLayouts_2024_06_14 } from "../inputs/booker-layouts.input";
import type { BookingLimitsCount_2024_06_14 } from "../inputs/booking-limits-count.input";
import type { ConfirmationPolicy_2024_06_14 } from "../inputs/confirmation-policy.input";
import { DestinationCalendar_2024_06_14 } from "../inputs/destination-calendar.input";
import type { OutputBookingField_2024_06_14 } from "./booking-fields.output";
import type { OutputLocation_2024_06_14 } from "./locations.output";
export type EventTypesOutputSchedulingType = "ROUND_ROBIN" | "COLLECTIVE" | "MANAGED";
declare class User_2024_06_14 {
    id: number;
    name: string | null;
    username: string | null;
    avatarUrl: string | null;
    weekStart: string;
    brandColor: string | null;
    darkBrandColor: string | null;
    metadata: Record<string, unknown>;
}
declare class EventTypeTeam {
    id: number;
    slug?: string;
    bannerUrl?: string;
    name?: string;
    logoUrl?: string;
    weekStart?: string;
    brandColor?: string;
    darkBrandColor?: string;
    theme?: string;
}
declare class BaseEventTypeOutput_2024_06_14 {
    id: number;
    lengthInMinutes: number;
    lengthInMinutesOptions?: number[];
    title: string;
    slug: string;
    description: string;
    locations: OutputLocation_2024_06_14[];
    bookingFields: OutputBookingField_2024_06_14[];
    disableGuests: boolean;
    slotInterval?: number | null;
    minimumBookingNotice?: number;
    beforeEventBuffer?: number;
    afterEventBuffer?: number;
    recurrence: Recurrence_2024_06_14 | null;
    metadata: Record<string, unknown>;
    price: number;
    currency: string;
    lockTimeZoneToggleOnBookingPage: boolean;
    seatsPerTimeSlot?: number | null;
    forwardParamsSuccessRedirect: boolean | null;
    successRedirectUrl: string | null;
    isInstantEvent: boolean;
    seatsShowAvailabilityCount?: boolean | null;
    scheduleId: number | null;
    bookingLimitsCount?: BookingLimitsCount_2024_06_14;
    onlyShowFirstAvailableSlot?: boolean;
    bookingLimitsDuration?: BookingLimitsDuration_2024_06_14;
    bookingWindow?: BookingWindow_2024_06_14;
    bookerLayouts?: BookerLayouts_2024_06_14;
    confirmationPolicy?: ConfirmationPolicy_2024_06_14;
    requiresBookerEmailVerification?: boolean;
    hideCalendarNotes?: boolean;
    color?: EventTypeColor_2024_06_14;
    seats?: Seats_2024_06_14;
    offsetStart?: number;
    customName?: string;
    destinationCalendar?: DestinationCalendar_2024_06_14;
    useDestinationCalendarEmail?: boolean;
    hideCalendarEventDetails?: boolean;
}
export declare class TeamEventTypeResponseHost extends TeamEventTypeHostInput {
    name: string;
    avatarUrl?: string | null;
}
export declare class EventTypeOutput_2024_06_14 extends BaseEventTypeOutput_2024_06_14 {
    ownerId: number;
    users: User_2024_06_14[];
}
export declare class TeamEventTypeOutput_2024_06_14 extends BaseEventTypeOutput_2024_06_14 {
    teamId: number;
    ownerId?: number | null;
    parentEventTypeId?: number | null;
    hosts: TeamEventTypeResponseHost[];
    assignAllTeamMembers?: boolean;
    schedulingType: EventTypesOutputSchedulingType | null;
    hideCalendarEventDetails?: boolean;
    team: EventTypeTeam;
}
export {};
//# sourceMappingURL=event-type.output.d.ts.map