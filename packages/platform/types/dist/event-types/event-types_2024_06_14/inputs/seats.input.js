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
exports.Seats_2024_06_14 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
// Class representing the seat options
var Seats_2024_06_14 = /** @class */ (function () {
    function Seats_2024_06_14() {
        this.disabled = false;
    }
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(1),
        (0, swagger_1.ApiProperty)({
            description: "Number of seats available per time slot",
            example: 4,
        }),
        __metadata("design:type", Number)
    ], Seats_2024_06_14.prototype, "seatsPerTimeSlot", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "Show attendee information to other guests",
            example: true,
        }),
        __metadata("design:type", Boolean)
    ], Seats_2024_06_14.prototype, "showAttendeeInfo", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "Display the count of available seats",
            example: true,
        }),
        __metadata("design:type", Boolean)
    ], Seats_2024_06_14.prototype, "showAvailabilityCount", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], Seats_2024_06_14.prototype, "disabled", void 0);
    return Seats_2024_06_14;
}());
exports.Seats_2024_06_14 = Seats_2024_06_14;
