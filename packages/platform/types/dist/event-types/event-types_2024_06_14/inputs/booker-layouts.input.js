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
exports.BookerLayouts_2024_06_14 = exports.LayoutValidator = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var platform_enums_1 = require("@calcom/platform-enums");
var LayoutValidator = /** @class */ (function () {
    function LayoutValidator() {
    }
    LayoutValidator.prototype.validate = function (value) {
        var validValues = Object.values(platform_enums_1.BookerLayoutsInputEnum_2024_06_14);
        // If the value is an array, check if every item in the array is valid
        if (Array.isArray(value)) {
            return value.every(function (layout) { return validValues.includes(layout); });
        }
        // If the value is a single layout, check if it is valid
        return validValues.includes(value);
    };
    LayoutValidator.prototype.defaultMessage = function () {
        var validValues = Object.values(platform_enums_1.BookerLayoutsInputEnum_2024_06_14).join(", ");
        return "Invalid layout. Valid options are: ".concat(validValues);
    };
    LayoutValidator = __decorate([
        (0, class_validator_1.ValidatorConstraint)({ name: "LayoutValidator", async: false })
    ], LayoutValidator);
    return LayoutValidator;
}());
exports.LayoutValidator = LayoutValidator;
function IsValidLayout(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "IsValidLayout",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: new LayoutValidator(),
        });
    };
}
var BookerLayouts_2024_06_14 = /** @class */ (function () {
    function BookerLayouts_2024_06_14() {
    }
    __decorate([
        IsValidLayout({ message: "defaultLayout must be one of the valid layouts - month, week or column" }),
        (0, swagger_1.ApiProperty)({ type: String, enum: platform_enums_1.BookerLayoutsInputEnum_2024_06_14 }),
        (0, class_validator_1.IsEnum)(platform_enums_1.BookerLayoutsInputEnum_2024_06_14),
        __metadata("design:type", String)
    ], BookerLayouts_2024_06_14.prototype, "defaultLayout", void 0);
    __decorate([
        IsValidLayout({ message: "enabledLayouts must be one of the valid layouts." }),
        (0, swagger_1.ApiProperty)({ type: [String], enum: platform_enums_1.BookerLayoutsInputEnum_2024_06_14 }),
        (0, class_validator_1.IsEnum)(platform_enums_1.BookerLayoutsInputEnum_2024_06_14, {
            each: true,
            message: "enabledLayouts must contain only valid layouts - month, week or column",
        }),
        __metadata("design:type", Array)
    ], BookerLayouts_2024_06_14.prototype, "enabledLayouts", void 0);
    return BookerLayouts_2024_06_14;
}());
exports.BookerLayouts_2024_06_14 = BookerLayouts_2024_06_14;
