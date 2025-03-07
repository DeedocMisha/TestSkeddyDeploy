import { SchedulingType } from "@calcom/platform-enums";
import { BookerLayouts_2024_06_14 } from "./booker-layouts.input";
import type { InputBookingField_2024_06_14 } from "./booking-fields.input";
import type { BookingLimitsCount_2024_06_14 } from "./booking-limits-count.input";
import type { BookingLimitsDuration_2024_06_14 } from "./booking-limits-duration.input";
import type { BookingWindow_2024_06_14 } from "./booking-window.input";
import type { ConfirmationPolicy_2024_06_14 } from "./confirmation-policy.input";
import { DestinationCalendar_2024_06_14 } from "./destination-calendar.input";
import { Disabled_2024_06_14 } from "./disabled.input";
import { EventTypeColor_2024_06_14 } from "./event-type-color.input";
import type { InputLocation_2024_06_14 } from "./locations.input";
import { Recurrence_2024_06_14 } from "./recurrence.input";
import { Seats_2024_06_14 } from "./seats.input";
export declare const CREATE_EVENT_LENGTH_EXAMPLE = 60;
export declare const CREATE_EVENT_TITLE_EXAMPLE = "Learn the secrets of masterchief!";
export declare const CREATE_EVENT_DESCRIPTION_EXAMPLE = "Discover the culinary wonders of the Argentina by making the best flan ever!";
export declare const CREATE_EVENT_SLUG_EXAMPLE = "learn-the-secrets-of-masterchief";
export declare class CreateEventTypeInput_2024_06_14 {
    lengthInMinutes: number;
    lengthInMinutesOptions?: number[];
    title: string;
    slug: string;
    description?: string;
    locations?: InputLocation_2024_06_14[];
    bookingFields?: InputBookingField_2024_06_14[];
    disableGuests?: boolean;
    slotInterval?: number;
    minimumBookingNotice?: number;
    beforeEventBuffer?: number;
    afterEventBuffer?: number;
    scheduleId?: number;
    bookingLimitsCount?: BookingLimitsCount_2024_06_14;
    onlyShowFirstAvailableSlot?: boolean;
    bookingLimitsDuration?: BookingLimitsDuration_2024_06_14;
    bookingWindow?: BookingWindow_2024_06_14;
    offsetStart?: number;
    bookerLayouts?: BookerLayouts_2024_06_14;
    confirmationPolicy?: ConfirmationPolicy_2024_06_14;
    recurrence?: Recurrence_2024_06_14 | Disabled_2024_06_14;
    requiresBookerEmailVerification?: boolean;
    hideCalendarNotes?: boolean;
    lockTimeZoneToggleOnBookingPage?: boolean;
    color?: EventTypeColor_2024_06_14;
    seats?: Seats_2024_06_14 | Disabled_2024_06_14;
    customName?: string;
    destinationCalendar?: DestinationCalendar_2024_06_14;
    useDestinationCalendarEmail?: boolean;
    hideCalendarEventDetails?: boolean;
    successRedirectUrl?: string;
}
export declare enum HostPriority {
    lowest = "lowest",
    low = "low",
    medium = "medium",
    high = "high",
    highest = "highest"
}
export declare class Host {
    userId: number;
    mandatory?: boolean;
    priority?: keyof typeof HostPriority;
}
export declare class CreateTeamEventTypeInput_2024_06_14 extends CreateEventTypeInput_2024_06_14 {
    schedulingType: keyof typeof SchedulingType;
    hosts: Host[];
    assignAllTeamMembers?: boolean;
}
//# sourceMappingURL=create-event-type.input.d.ts.map