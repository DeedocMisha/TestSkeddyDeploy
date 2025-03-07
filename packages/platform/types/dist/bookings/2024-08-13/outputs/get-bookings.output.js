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
exports.GetBookingsOutput_2024_08_13 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var platform_constants_1 = require("@calcom/platform-constants");
var platform_types_1 = require("@calcom/platform-types");
var GetBookingsOutput_2024_08_13 = /** @class */ (function () {
    function GetBookingsOutput_2024_08_13() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ example: platform_constants_1.SUCCESS_STATUS, enum: [platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS] }),
        (0, class_validator_1.IsEnum)([platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS]),
        __metadata("design:type", Object)
    ], GetBookingsOutput_2024_08_13.prototype, "status", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: "array",
            items: {
                oneOf: [
                    { $ref: (0, swagger_1.getSchemaPath)(platform_types_1.BookingOutput_2024_08_13) },
                    { $ref: (0, swagger_1.getSchemaPath)(platform_types_1.RecurringBookingOutput_2024_08_13) },
                    { $ref: (0, swagger_1.getSchemaPath)(platform_types_1.GetSeatedBookingOutput_2024_08_13) },
                    { $ref: (0, swagger_1.getSchemaPath)(platform_types_1.GetRecurringSeatedBookingOutput_2024_08_13) },
                ],
            },
            description: "Array of booking data, which can contain either BookingOutput objects or RecurringBookingOutput objects",
        }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        __metadata("design:type", Array)
    ], GetBookingsOutput_2024_08_13.prototype, "data", void 0);
    GetBookingsOutput_2024_08_13 = __decorate([
        (0, swagger_1.ApiExtraModels)(platform_types_1.BookingOutput_2024_08_13, platform_types_1.RecurringBookingOutput_2024_08_13, platform_types_1.GetSeatedBookingOutput_2024_08_13, platform_types_1.GetRecurringSeatedBookingOutput_2024_08_13)
    ], GetBookingsOutput_2024_08_13);
    return GetBookingsOutput_2024_08_13;
}());
exports.GetBookingsOutput_2024_08_13 = GetBookingsOutput_2024_08_13;
