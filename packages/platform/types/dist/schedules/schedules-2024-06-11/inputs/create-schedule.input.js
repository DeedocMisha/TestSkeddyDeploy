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
exports.CreateScheduleInput_2024_06_11 = exports.ScheduleOverrideInput_2024_06_11 = exports.ScheduleAvailabilityInput_2024_06_11 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var constants_1 = require("../constants");
var ScheduleAvailabilityInput_2024_06_11 = /** @class */ (function () {
    function ScheduleAvailabilityInput_2024_06_11() {
    }
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsIn)(constants_1.WEEK_DAYS, { each: true }),
        (0, swagger_1.ApiProperty)({
            type: [String],
            example: ["Monday", "Tuesday"],
            description: "Array of days when schedule is active.",
            enum: constants_1.WEEK_DAYS,
        }),
        __metadata("design:type", Array)
    ], ScheduleAvailabilityInput_2024_06_11.prototype, "days", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.Matches)(constants_1.TIME_FORMAT_HH_MM, { message: "startTime must be a valid time format HH:MM" }),
        (0, swagger_1.ApiProperty)({
            example: "08:00",
            description: "startTime must be a valid time in format HH:MM e.g. 08:00",
        }),
        __metadata("design:type", String)
    ], ScheduleAvailabilityInput_2024_06_11.prototype, "startTime", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.Matches)(constants_1.TIME_FORMAT_HH_MM, { message: "endTime must be a valid time format HH:MM" }),
        (0, swagger_1.ApiProperty)({
            example: "15:00",
            description: "endTime must be a valid time in format HH:MM e.g. 15:00",
        }),
        __metadata("design:type", String)
    ], ScheduleAvailabilityInput_2024_06_11.prototype, "endTime", void 0);
    return ScheduleAvailabilityInput_2024_06_11;
}());
exports.ScheduleAvailabilityInput_2024_06_11 = ScheduleAvailabilityInput_2024_06_11;
var ScheduleOverrideInput_2024_06_11 = /** @class */ (function () {
    function ScheduleOverrideInput_2024_06_11() {
    }
    __decorate([
        (0, class_validator_1.IsISO8601)({ strict: true }),
        (0, swagger_1.ApiProperty)({
            example: "2024-05-20",
        }),
        __metadata("design:type", String)
    ], ScheduleOverrideInput_2024_06_11.prototype, "date", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.Matches)(constants_1.TIME_FORMAT_HH_MM, { message: "startTime must be a valid time format HH:MM" }),
        (0, swagger_1.ApiProperty)({
            example: "12:00",
            description: "startTime must be a valid time in format HH:MM e.g. 12:00",
        }),
        __metadata("design:type", String)
    ], ScheduleOverrideInput_2024_06_11.prototype, "startTime", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.Matches)(constants_1.TIME_FORMAT_HH_MM, { message: "endTime must be a valid time format HH:MM" }),
        (0, swagger_1.ApiProperty)({
            example: "13:00",
            description: "endTime must be a valid time in format HH:MM e.g. 13:00",
        }),
        __metadata("design:type", String)
    ], ScheduleOverrideInput_2024_06_11.prototype, "endTime", void 0);
    return ScheduleOverrideInput_2024_06_11;
}());
exports.ScheduleOverrideInput_2024_06_11 = ScheduleOverrideInput_2024_06_11;
var CreateScheduleInput_2024_06_11 = /** @class */ (function () {
    function CreateScheduleInput_2024_06_11() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            type: String,
            example: "Catch up hours",
        }),
        __metadata("design:type", String)
    ], CreateScheduleInput_2024_06_11.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsTimeZone)(),
        (0, swagger_1.ApiProperty)({
            type: String,
            example: "Europe/Rome",
            description: "Timezone is used to calculate available times when an event using the schedule is booked.",
        }),
        __metadata("design:type", String)
    ], CreateScheduleInput_2024_06_11.prototype, "timeZone", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return ScheduleAvailabilityInput_2024_06_11; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: [ScheduleAvailabilityInput_2024_06_11],
            description: "Each object contains days and times when the user is available. If not passed, the default availability is Monday to Friday from 09:00 to 17:00.",
            example: [
                {
                    days: ["Monday", "Tuesday"],
                    startTime: "17:00",
                    endTime: "19:00",
                },
                {
                    days: ["Wednesday", "Thursday"],
                    startTime: "16:00",
                    endTime: "20:00",
                },
            ],
        }),
        __metadata("design:type", Array)
    ], CreateScheduleInput_2024_06_11.prototype, "availability", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            type: Boolean,
            example: true,
            description: "Each user should have 1 default schedule. If you specified `timeZone` when creating managed user, then the default schedule will be created with that timezone.\n    Default schedule means that if an event type is not tied to a specific schedule then the default schedule is used.",
        }),
        __metadata("design:type", Boolean)
    ], CreateScheduleInput_2024_06_11.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return ScheduleOverrideInput_2024_06_11; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: [ScheduleOverrideInput_2024_06_11],
            description: "Need to change availability for a specific date? Add an override.",
            example: [
                {
                    date: "2024-05-20",
                    startTime: "18:00",
                    endTime: "21:00",
                },
            ],
        }),
        __metadata("design:type", Array)
    ], CreateScheduleInput_2024_06_11.prototype, "overrides", void 0);
    return CreateScheduleInput_2024_06_11;
}());
exports.CreateScheduleInput_2024_06_11 = CreateScheduleInput_2024_06_11;
