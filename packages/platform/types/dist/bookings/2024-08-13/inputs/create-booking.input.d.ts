import type { BookingLanguageType } from "./language";
declare class Attendee {
    name: string;
    email?: string;
    timeZone: string;
    phoneNumber?: string;
    language?: BookingLanguageType;
}
export declare class CreateBookingInput_2024_08_13 {
    start: string;
    lengthInMinutes?: number;
    eventTypeId: number;
    attendee: Attendee;
    guests?: string[];
    meetingUrl?: string;
    location?: string;
    metadata?: Record<string, string>;
    bookingFieldsResponses?: Record<string, unknown>;
}
export declare class CreateInstantBookingInput_2024_08_13 extends CreateBookingInput_2024_08_13 {
    instant: boolean;
}
export declare class CreateRecurringBookingInput_2024_08_13 extends CreateBookingInput_2024_08_13 {
    recurrenceCount?: number;
}
export {};
//# sourceMappingURL=create-booking.input.d.ts.map