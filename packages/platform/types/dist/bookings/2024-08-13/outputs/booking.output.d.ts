import type { BookingLanguageType } from "../inputs/language";
declare class Attendee {
    name: string;
    email: string;
    timeZone: string;
    language?: BookingLanguageType;
    absent: boolean;
    phoneNumber?: string;
}
export declare class SeatedAttendee extends Attendee {
    seatUid: string;
    bookingFieldsResponses: Record<string, unknown>;
    metadata?: Record<string, string>;
}
declare class BookingHost {
    id: number;
    name: string;
    email: string;
    username: string;
    timeZone: string;
}
declare class EventType {
    id: number;
    slug: string;
}
declare class BaseBookingOutput_2024_08_13 {
    id: number;
    uid: string;
    title: string;
    description: string;
    hosts: BookingHost[];
    status: "cancelled" | "accepted" | "rejected" | "pending";
    cancellationReason?: string;
    cancelledByEmail?: string;
    reschedulingReason?: string;
    rescheduledByEmail?: string;
    rescheduledFromUid?: string;
    start: string;
    end: string;
    duration: number;
    eventTypeId: number;
    eventType: EventType;
    meetingUrl?: string;
    location: string;
    absentHost: boolean;
    createdAt: string;
    updatedAt: string | null;
    metadata?: Record<string, string>;
    rating?: number;
}
export declare class BookingOutput_2024_08_13 extends BaseBookingOutput_2024_08_13 {
    attendees: Attendee[];
    guests?: string[];
    bookingFieldsResponses: Record<string, unknown>;
}
export declare class RecurringBookingOutput_2024_08_13 extends BookingOutput_2024_08_13 {
    recurringBookingUid: string;
    bookingFieldsResponses: Record<string, unknown>;
}
export declare class GetSeatedBookingOutput_2024_08_13 extends BaseBookingOutput_2024_08_13 {
    attendees: SeatedAttendee[];
}
export declare class GetRecurringSeatedBookingOutput_2024_08_13 extends BaseBookingOutput_2024_08_13 {
    attendees: SeatedAttendee[];
    recurringBookingUid: string;
}
export declare class CreateSeatedBookingOutput_2024_08_13 extends BaseBookingOutput_2024_08_13 {
    seatUid: string;
    attendees: SeatedAttendee[];
}
export declare class CreateRecurringSeatedBookingOutput_2024_08_13 extends BaseBookingOutput_2024_08_13 {
    seatUid: string;
    attendees: SeatedAttendee[];
    recurringBookingUid: string;
}
declare class ReassignedToDto {
    id: number;
    name: string;
    email: string;
}
export declare class ReassignBookingOutput_2024_08_13 {
    bookingUid: string;
    reassignedTo: ReassignedToDto;
}
export {};
//# sourceMappingURL=booking.output.d.ts.map