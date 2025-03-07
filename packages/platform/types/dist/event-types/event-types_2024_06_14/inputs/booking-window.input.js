"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.RangeWindow_2024_06_14 = exports.CalendarDaysWindow_2024_06_14 = exports.BusinessDaysWindow_2024_06_14 = void 0;
exports.ValidateBookingWindow = ValidateBookingWindow;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var platform_enums_1 = require("@calcom/platform-enums");
// Base class for common properties and validation
var BookingWindowBase = /** @class */ (function () {
    function BookingWindowBase() {
    }
    __decorate([
        (0, class_validator_1.IsEnum)(platform_enums_1.BookingWindowPeriodInputTypeEnum_2024_06_14),
        (0, swagger_1.ApiProperty)({
            enum: ["businessDays", "calendarDays", "range"],
            description: "Whether the window should be business days, calendar days or a range of dates",
        }),
        __metadata("design:type", String)
    ], BookingWindowBase.prototype, "type", void 0);
    return BookingWindowBase;
}());
var rollingDescription = "\n      Determines the behavior of the booking window:\n      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' \n        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, \n        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days \n        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.\n      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the\n        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current \n        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next \n        3 calendar days (November 10\u201312).\n    ";
// Separate classes for different value types
var BusinessDaysWindow_2024_06_14 = /** @class */ (function (_super) {
    __extends(BusinessDaysWindow_2024_06_14, _super);
    function BusinessDaysWindow_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsDefined)(),
        (0, swagger_1.ApiProperty)({ example: 5, description: "How many business day into the future can this event be booked" }),
        __metadata("design:type", Number)
    ], BusinessDaysWindow_2024_06_14.prototype, "value", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)({
            example: true,
            description: rollingDescription,
        }),
        __metadata("design:type", Boolean)
    ], BusinessDaysWindow_2024_06_14.prototype, "rolling", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], BusinessDaysWindow_2024_06_14.prototype, "disabled", void 0);
    return BusinessDaysWindow_2024_06_14;
}(BookingWindowBase));
exports.BusinessDaysWindow_2024_06_14 = BusinessDaysWindow_2024_06_14;
var CalendarDaysWindow_2024_06_14 = /** @class */ (function (_super) {
    __extends(CalendarDaysWindow_2024_06_14, _super);
    function CalendarDaysWindow_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsDefined)(),
        (0, swagger_1.ApiProperty)({ example: 5, description: "How many calendar days into the future can this event be booked" }),
        __metadata("design:type", Number)
    ], CalendarDaysWindow_2024_06_14.prototype, "value", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)({
            example: true,
            description: rollingDescription,
        }),
        __metadata("design:type", Boolean)
    ], CalendarDaysWindow_2024_06_14.prototype, "rolling", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], CalendarDaysWindow_2024_06_14.prototype, "disabled", void 0);
    return CalendarDaysWindow_2024_06_14;
}(BookingWindowBase));
exports.CalendarDaysWindow_2024_06_14 = CalendarDaysWindow_2024_06_14;
var RangeWindow_2024_06_14 = /** @class */ (function (_super) {
    __extends(RangeWindow_2024_06_14, _super);
    function RangeWindow_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ArrayNotEmpty)(),
        (0, class_validator_1.IsDateString)({}, { each: true }),
        (0, class_validator_1.IsDefined)(),
        (0, swagger_1.ApiProperty)({
            type: [String],
            example: ["2030-09-05", "2030-09-09"],
            description: "Date range for when this event can be booked.",
        }),
        __metadata("design:type", Array)
    ], RangeWindow_2024_06_14.prototype, "value", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], RangeWindow_2024_06_14.prototype, "disabled", void 0);
    return RangeWindow_2024_06_14;
}(BookingWindowBase));
exports.RangeWindow_2024_06_14 = RangeWindow_2024_06_14;
// Custom validator to handle the union type
var BookingWindowValidator = /** @class */ (function () {
    function BookingWindowValidator() {
    }
    BookingWindowValidator.prototype.validate = function (value) {
        if ("disabled" in value && value.disabled === true) {
            return true;
        }
        if ("type" in value) {
            switch (value.type) {
                case platform_enums_1.BookingWindowPeriodInputTypeEnum_2024_06_14.businessDays:
                case platform_enums_1.BookingWindowPeriodInputTypeEnum_2024_06_14.calendarDays:
                    return (typeof value.value === "number" &&
                        (typeof value.rolling ===
                            "undefined" ||
                            typeof value.rolling ===
                                "boolean"));
                case platform_enums_1.BookingWindowPeriodInputTypeEnum_2024_06_14.range:
                    return (Array.isArray(value.value) &&
                        value.value.every(function (date) { return typeof date === "string" && !isNaN(Date.parse(date)); }));
                default:
                    return false;
            }
        }
        return false;
    };
    BookingWindowValidator.prototype.defaultMessage = function () {
        return "Invalid bookingWindow structure.";
    };
    BookingWindowValidator = __decorate([
        (0, class_validator_1.ValidatorConstraint)({ name: "bookingWindowValidator", async: false })
    ], BookingWindowValidator);
    return BookingWindowValidator;
}());
function ValidateBookingWindow(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "ValidateBookingWindow",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: new BookingWindowValidator(),
        });
    };
}
