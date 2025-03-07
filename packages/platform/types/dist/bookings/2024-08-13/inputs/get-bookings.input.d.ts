declare enum Status {
    upcoming = "upcoming",
    recurring = "recurring",
    past = "past",
    cancelled = "cancelled",
    unconfirmed = "unconfirmed"
}
type StatusType = keyof typeof Status;
declare enum SortOrder {
    asc = "asc",
    desc = "desc"
}
type SortOrderType = keyof typeof SortOrder;
export declare class GetBookingsInput_2024_08_13 {
    status?: StatusType[];
    attendeeEmail?: string;
    attendeeName?: string;
    eventTypeIds?: number[];
    eventTypeId?: number;
    teamsIds?: number[];
    teamId?: number;
    afterStart?: string;
    beforeEnd?: string;
    afterUpdatedAt?: string;
    beforeUpdatedAt?: string;
    sortStart?: SortOrderType;
    sortEnd?: SortOrderType;
    sortCreated?: SortOrderType;
    sortUpdatedAt?: SortOrderType;
    take?: number;
    skip?: number;
}
export {};
//# sourceMappingURL=get-bookings.input.d.ts.map