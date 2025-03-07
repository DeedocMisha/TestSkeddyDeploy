export declare class Slot_2024_09_04 {
    start: string;
}
export declare class SeatedSlot_2024_09_04 extends Slot_2024_09_04 {
    seatsBooked: number;
    seatsRemaining: number;
    seatsTotal: number;
    bookingUid?: string;
}
export declare class SlotsOutput_2024_09_04 {
    [key: string]: (Slot_2024_09_04 | SeatedSlot_2024_09_04)[];
}
export declare class RangeSlot_2024_09_04 extends Slot_2024_09_04 {
    end: string;
}
export declare class SeatedRangeSlot_2024_09_04 extends RangeSlot_2024_09_04 {
    seatsBooked: number;
    seatsRemaining: number;
    seatsTotal: number;
    bookingUid?: string;
}
export declare class RangeSlotsOutput_2024_09_04 {
    [key: string]: (RangeSlot_2024_09_04 | SeatedRangeSlot_2024_09_04)[];
}
//# sourceMappingURL=slots.output.d.ts.map