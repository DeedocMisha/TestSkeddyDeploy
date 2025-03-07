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
exports.CancelBookingInput_2024_04_15 = exports.GetBookingsInput_2024_04_15 = exports.Status_2024_04_15 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var Status_2024_04_15;
(function (Status_2024_04_15) {
    Status_2024_04_15["upcoming"] = "upcoming";
    Status_2024_04_15["recurring"] = "recurring";
    Status_2024_04_15["past"] = "past";
    Status_2024_04_15["cancelled"] = "cancelled";
    Status_2024_04_15["unconfirmed"] = "unconfirmed";
})(Status_2024_04_15 || (exports.Status_2024_04_15 = Status_2024_04_15 = {}));
var Filters = /** @class */ (function () {
    function Filters() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, swagger_1.ApiPropertyOptional)({ type: [Number] }),
        __metadata("design:type", Array)
    ], Filters.prototype, "teamsIds", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, swagger_1.ApiPropertyOptional)({ type: [Number] }),
        __metadata("design:type", Array)
    ], Filters.prototype, "userIds", void 0);
    __decorate([
        (0, class_validator_1.IsEnum)(Status_2024_04_15),
        (0, swagger_1.ApiProperty)({ enum: Status_2024_04_15 }),
        __metadata("design:type", String)
    ], Filters.prototype, "status", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, swagger_1.ApiPropertyOptional)({ type: [Number] }),
        __metadata("design:type", Array)
    ], Filters.prototype, "eventTypeIds", void 0);
    return Filters;
}());
var GetBookingsInput_2024_04_15 = /** @class */ (function () {
    function GetBookingsInput_2024_04_15() {
    }
    __decorate([
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return Filters; }),
        (0, swagger_1.ApiProperty)({ type: Filters }),
        __metadata("design:type", Filters)
    ], GetBookingsInput_2024_04_15.prototype, "filters", void 0);
    __decorate([
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value && parseInt(value);
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(1),
        (0, class_validator_1.Max)(100),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({ description: "Maximum number of bookings to retrieve.", example: 50 }),
        __metadata("design:type", Number)
    ], GetBookingsInput_2024_04_15.prototype, "limit", void 0);
    __decorate([
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value && parseInt(value);
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({ description: "Cursor for pagination.", example: 10, nullable: true }),
        __metadata("design:type", Object)
    ], GetBookingsInput_2024_04_15.prototype, "cursor", void 0);
    return GetBookingsInput_2024_04_15;
}());
exports.GetBookingsInput_2024_04_15 = GetBookingsInput_2024_04_15;
var CancelBookingInput_2024_04_15 = /** @class */ (function () {
    function CancelBookingInput_2024_04_15() {
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({ description: "Booking ID to cancel.", example: 123 }),
        __metadata("design:type", Number)
    ], CancelBookingInput_2024_04_15.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], CancelBookingInput_2024_04_15.prototype, "uid", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            example: true,
        }),
        __metadata("design:type", Boolean)
    ], CancelBookingInput_2024_04_15.prototype, "allRemainingBookings", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: String,
            description: "Reason for cancellation.",
            example: "Scheduling conflict",
        }),
        __metadata("design:type", String)
    ], CancelBookingInput_2024_04_15.prototype, "cancellationReason", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], CancelBookingInput_2024_04_15.prototype, "seatReferenceUid", void 0);
    return CancelBookingInput_2024_04_15;
}());
exports.CancelBookingInput_2024_04_15 = CancelBookingInput_2024_04_15;
