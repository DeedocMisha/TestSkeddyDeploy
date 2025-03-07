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
exports.BaseBookingLimitsDuration_2024_06_14 = void 0;
exports.ValidateBookingLimistsDuration = ValidateBookingLimistsDuration;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var BaseBookingLimitsDuration_2024_06_14 = /** @class */ (function () {
    function BaseBookingLimitsDuration_2024_06_14() {
        this.disabled = false;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(15),
        (0, swagger_1.ApiPropertyOptional)({
            description: "The duration of bookings per day (must be a multiple of 15)",
            example: 60,
        }),
        __metadata("design:type", Number)
    ], BaseBookingLimitsDuration_2024_06_14.prototype, "day", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(15),
        (0, swagger_1.ApiPropertyOptional)({
            description: "The duration of bookings per week (must be a multiple of 15)",
            example: 120,
        }),
        __metadata("design:type", Number)
    ], BaseBookingLimitsDuration_2024_06_14.prototype, "week", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(15),
        (0, swagger_1.ApiPropertyOptional)({
            description: "The duration of bookings per month (must be a multiple of 15)",
            example: 180,
        }),
        __metadata("design:type", Number)
    ], BaseBookingLimitsDuration_2024_06_14.prototype, "month", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(15),
        (0, swagger_1.ApiPropertyOptional)({
            description: "The duration of bookings per year (must be a multiple of 15)",
            example: 240,
        }),
        __metadata("design:type", Number)
    ], BaseBookingLimitsDuration_2024_06_14.prototype, "year", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], BaseBookingLimitsDuration_2024_06_14.prototype, "disabled", void 0);
    return BaseBookingLimitsDuration_2024_06_14;
}());
exports.BaseBookingLimitsDuration_2024_06_14 = BaseBookingLimitsDuration_2024_06_14;
var BookingLimitsDurationValidator = /** @class */ (function () {
    function BookingLimitsDurationValidator() {
        this.errorDetails = {};
    }
    BookingLimitsDurationValidator.prototype.validate = function (value) {
        if (!value)
            return false;
        if ("disabled" in value) {
            return true;
        }
        var day = value.day, week = value.week, month = value.month, year = value.year;
        // Check if 'day' exceeds 'week', 'month', or 'year'
        if (day && ((week && day > week) || (month && day > month) || (year && day > year))) {
            this.errorDetails.invalidLimit = "day";
            this.errorDetails.comparedLimit = week && day > week ? "week" : month && day > month ? "month" : "year";
            return false;
        }
        // Check if 'week' exceeds 'month' or 'year'
        if (week && ((month && week > month) || (year && week > year))) {
            this.errorDetails.invalidLimit = "week";
            this.errorDetails.comparedLimit = month && week > month ? "month" : "year";
            return false;
        }
        // Check if 'month' exceeds 'year'
        if (month && year && month > year) {
            this.errorDetails.invalidLimit = "month";
            this.errorDetails.comparedLimit = "year";
            return false;
        }
        return true;
    };
    BookingLimitsDurationValidator.prototype.defaultMessage = function () {
        var _a = this.errorDetails, invalidLimit = _a.invalidLimit, comparedLimit = _a.comparedLimit;
        if (invalidLimit && comparedLimit) {
            return "Invalid booking durations: The duration of bookings for ".concat(invalidLimit, " cannot exceed the duration of bookings for ").concat(comparedLimit, ".");
        }
        return "Invalid booking durations structure";
    };
    BookingLimitsDurationValidator = __decorate([
        (0, class_validator_1.ValidatorConstraint)({ name: "BookingLimitsDurationValidator", async: false })
    ], BookingLimitsDurationValidator);
    return BookingLimitsDurationValidator;
}());
function ValidateBookingLimistsDuration(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "ValidateBookingLimistsDuration",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: new BookingLimitsDurationValidator(),
        });
    };
}
