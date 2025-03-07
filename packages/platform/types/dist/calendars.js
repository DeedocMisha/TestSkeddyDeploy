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
exports.CalendarBusyTimesInput = exports.Calendar = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_transformer_2 = require("class-transformer");
var class_validator_1 = require("class-validator");
var Calendar = /** @class */ (function () {
    function Calendar() {
    }
    __decorate([
        (0, class_transformer_2.Transform)(function (_a) {
            var value = _a.value;
            return value && parseInt(value);
        }),
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Number)
    ], Calendar.prototype, "credentialId", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], Calendar.prototype, "externalId", void 0);
    return Calendar;
}());
exports.Calendar = Calendar;
var CalendarBusyTimesInput = /** @class */ (function () {
    function CalendarBusyTimesInput() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            required: true,
            description: "The timezone of the logged in user represented as a string",
            example: "America/New_York",
        }),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CalendarBusyTimesInput.prototype, "loggedInUsersTz", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({
            required: false,
            description: "The starting date for the busy times query",
            example: "2023-10-01",
        }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsDateString)(),
        __metadata("design:type", String)
    ], CalendarBusyTimesInput.prototype, "dateFrom", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({
            required: false,
            description: "The ending date for the busy times query",
            example: "2023-10-31",
        }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsDateString)(),
        __metadata("design:type", String)
    ], CalendarBusyTimesInput.prototype, "dateTo", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: [Calendar],
            required: true,
            description: "An array of Calendar objects representing the calendars to be loaded",
            example: "[{ credentialId: \"1\", externalId: \"AQgtJE7RnHEeyisVq2ENs2gAAAgEGAAAACgtJE7RnHEeyisVq2ENs2gAAAhSDAAAA\" }, { credentialId: \"2\", externalId: \"AQM7RnHEeyisVq2ENs2gAAAhFDBBBBB\" }]",
        }),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return Calendar; }),
        __metadata("design:type", Array)
    ], CalendarBusyTimesInput.prototype, "calendarsToLoad", void 0);
    return CalendarBusyTimesInput;
}());
exports.CalendarBusyTimesInput = CalendarBusyTimesInput;
