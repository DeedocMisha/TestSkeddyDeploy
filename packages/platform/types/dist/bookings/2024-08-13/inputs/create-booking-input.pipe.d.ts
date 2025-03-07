import type { PipeTransform } from "@nestjs/common";
import { CreateRecurringBookingInput_2024_08_13 } from "./create-booking.input";
import { CreateBookingInput_2024_08_13 } from "./create-booking.input";
import { CreateInstantBookingInput_2024_08_13 } from "./create-booking.input";
export type CreateBookingInput = CreateBookingInput_2024_08_13 | CreateRecurringBookingInput_2024_08_13 | CreateInstantBookingInput_2024_08_13;
export declare class CreateBookingInputPipe implements PipeTransform {
    constructor();
    transform(value: CreateBookingInput): CreateBookingInput;
    validateBooking(value: CreateBookingInput_2024_08_13): CreateBookingInput_2024_08_13;
    validateRecurringBooking(value: CreateRecurringBookingInput_2024_08_13): CreateRecurringBookingInput_2024_08_13;
    validateInstantBooking(value: CreateInstantBookingInput_2024_08_13): CreateInstantBookingInput_2024_08_13;
    private formatErrors;
    private isRecurringBookingInput;
    private isInstantBookingInput;
}
//# sourceMappingURL=create-booking-input.pipe.d.ts.map