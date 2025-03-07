"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelSeatedBookingInput_2024_08_13 = exports.CancelBookingInput_2024_08_13 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CancelBookingInput_2024_08_13 = /** @class */ (function () {
    function CancelBookingInput_2024_08_13() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({ example: "User requested cancellation" }),
        __metadata("design:type", String)
    ], CancelBookingInput_2024_08_13.prototype, "cancellationReason", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "For recurring non-seated booking - if true, cancel booking with the bookingUid of the individual recurrence and all recurrences that come after it.",
        }),
        __metadata("design:type", Boolean)
    ], CancelBookingInput_2024_08_13.prototype, "cancelSubsequentBookings", void 0);
    return CancelBookingInput_2024_08_13;
}());
exports.CancelBookingInput_2024_08_13 = CancelBookingInput_2024_08_13;
var CancelSeatedBookingInput_2024_08_13 = /** @class */ (function () {
    function CancelSeatedBookingInput_2024_08_13() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String,
            example: "3be561a9-31f1-4b8e-aefc-9d9a085f0dd1",
            description: "Uid of the specific seat within booking.",
        }),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CancelSeatedBookingInput_2024_08_13.prototype, "seatUid", void 0);
    return CancelSeatedBookingInput_2024_08_13;
}());
exports.CancelSeatedBookingInput_2024_08_13 = CancelSeatedBookingInput_2024_08_13;
