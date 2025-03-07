import type { PipeTransform } from "@nestjs/common";
import { CancelBookingInput_2024_08_13, CancelSeatedBookingInput_2024_08_13 } from "./cancel-booking.input";
export type CancelBookingInput = CancelBookingInput_2024_08_13 | CancelSeatedBookingInput_2024_08_13;
export declare class CancelBookingInputPipe implements PipeTransform {
    constructor();
    transform(value: CancelBookingInput): CancelBookingInput;
    validateCancelBooking(value: CancelBookingInput_2024_08_13): CancelBookingInput_2024_08_13;
    validateCancelBookingSeated(value: CancelSeatedBookingInput_2024_08_13): CancelSeatedBookingInput_2024_08_13;
    private formatErrors;
    private isCancelSeatedBookingInput;
}
//# sourceMappingURL=cancel-booking-input.pipe.d.ts.map