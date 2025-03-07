import type { PipeTransform } from "@nestjs/common";
import { RescheduleBookingInput_2024_08_13, RescheduleSeatedBookingInput_2024_08_13 } from "./reschedule-booking.input";
export type RescheduleBookingInput = RescheduleBookingInput_2024_08_13 | RescheduleSeatedBookingInput_2024_08_13;
export declare class RescheduleBookingInputPipe implements PipeTransform {
    constructor();
    transform(value: RescheduleBookingInput): RescheduleBookingInput;
    validateReschedule(value: RescheduleBookingInput_2024_08_13): RescheduleBookingInput_2024_08_13;
    validateSeatedReschedule(value: RescheduleSeatedBookingInput_2024_08_13): RescheduleSeatedBookingInput_2024_08_13;
    private formatErrors;
    private isSeatedRescheduleInput;
}
//# sourceMappingURL=reschedule-booking-input.pipe.d.ts.map