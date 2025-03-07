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
exports.RescheduleSeatedBookingInput_2024_08_13 = exports.RescheduleBookingInput_2024_08_13 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var RescheduleBookingInput_2024_08_13 = /** @class */ (function () {
    function RescheduleBookingInput_2024_08_13() {
    }
    __decorate([
        (0, class_validator_1.IsDateString)(),
        (0, swagger_1.ApiProperty)({
            description: "Start time in ISO 8601 format for the new booking",
            example: "2024-08-13T10:00:00Z",
        }),
        __metadata("design:type", String)
    ], RescheduleBookingInput_2024_08_13.prototype, "start", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            example: "User requested reschedule",
            description: "Reason for rescheduling the booking",
        }),
        __metadata("design:type", String)
    ], RescheduleBookingInput_2024_08_13.prototype, "reschedulingReason", void 0);
    return RescheduleBookingInput_2024_08_13;
}());
exports.RescheduleBookingInput_2024_08_13 = RescheduleBookingInput_2024_08_13;
var RescheduleSeatedBookingInput_2024_08_13 = /** @class */ (function () {
    function RescheduleSeatedBookingInput_2024_08_13() {
    }
    __decorate([
        (0, class_validator_1.IsDateString)(),
        (0, swagger_1.ApiProperty)({
            description: "Start time in ISO 8601 format for the new booking",
            example: "2024-08-13T10:00:00Z",
        }),
        __metadata("design:type", String)
    ], RescheduleSeatedBookingInput_2024_08_13.prototype, "start", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String,
            example: "3be561a9-31f1-4b8e-aefc-9d9a085f0dd1",
            description: "Uid of the specific seat within booking.",
        }),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], RescheduleSeatedBookingInput_2024_08_13.prototype, "seatUid", void 0);
    return RescheduleSeatedBookingInput_2024_08_13;
}());
exports.RescheduleSeatedBookingInput_2024_08_13 = RescheduleSeatedBookingInput_2024_08_13;
