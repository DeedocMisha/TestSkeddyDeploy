export declare enum Status_2024_04_15 {
    upcoming = "upcoming",
    recurring = "recurring",
    past = "past",
    cancelled = "cancelled",
    unconfirmed = "unconfirmed"
}
type BookingStatus = `${Status_2024_04_15}`;
declare class Filters {
    teamsIds?: number[];
    userIds?: number[];
    status: BookingStatus;
    eventTypeIds?: number[];
}
export declare class GetBookingsInput_2024_04_15 {
    filters: Filters;
    limit?: number;
    cursor?: number | null;
}
export declare class CancelBookingInput_2024_04_15 {
    id?: number;
    uid?: string;
    allRemainingBookings?: boolean;
    cancellationReason?: string;
    seatReferenceUid?: string;
}
export {};
//# sourceMappingURL=index.d.ts.map