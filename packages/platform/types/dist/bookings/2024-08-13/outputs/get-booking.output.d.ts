import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";
import { BookingOutput_2024_08_13, GetSeatedBookingOutput_2024_08_13, RecurringBookingOutput_2024_08_13, GetRecurringSeatedBookingOutput_2024_08_13 } from "@calcom/platform-types";
export declare class GetBookingOutput_2024_08_13 {
    status: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
    data: BookingOutput_2024_08_13 | RecurringBookingOutput_2024_08_13 | RecurringBookingOutput_2024_08_13[] | GetSeatedBookingOutput_2024_08_13 | GetRecurringSeatedBookingOutput_2024_08_13 | GetRecurringSeatedBookingOutput_2024_08_13[];
    error?: Error;
}
//# sourceMappingURL=get-booking.output.d.ts.map