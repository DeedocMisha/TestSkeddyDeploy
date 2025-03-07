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
exports.ScheduleOutput_2024_06_11 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var create_schedule_input_1 = require("../inputs/create-schedule.input");
var ScheduleOutput_2024_06_11 = /** @class */ (function () {
    function ScheduleOutput_2024_06_11() {
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiProperty)({ example: 254 }),
        __metadata("design:type", Number)
    ], ScheduleOutput_2024_06_11.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiProperty)({ example: 478 }),
        __metadata("design:type", Number)
    ], ScheduleOutput_2024_06_11.prototype, "ownerId", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "Catch up hours" }),
        __metadata("design:type", String)
    ], ScheduleOutput_2024_06_11.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsTimeZone)(),
        (0, swagger_1.ApiProperty)({ example: "Europe/Rome" }),
        __metadata("design:type", String)
    ], ScheduleOutput_2024_06_11.prototype, "timeZone", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return create_schedule_input_1.ScheduleAvailabilityInput_2024_06_11; }),
        (0, swagger_1.ApiProperty)({
            type: [create_schedule_input_1.ScheduleAvailabilityInput_2024_06_11],
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
    ], ScheduleOutput_2024_06_11.prototype, "availability", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({ example: true }),
        __metadata("design:type", Boolean)
    ], ScheduleOutput_2024_06_11.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return create_schedule_input_1.ScheduleOverrideInput_2024_06_11; }),
        (0, swagger_1.ApiProperty)({
            type: [create_schedule_input_1.ScheduleOverrideInput_2024_06_11],
            example: [
                {
                    date: "2024-05-20",
                    startTime: "18:00",
                    endTime: "21:00",
                },
            ],
        }),
        __metadata("design:type", Array)
    ], ScheduleOutput_2024_06_11.prototype, "overrides", void 0);
    return ScheduleOutput_2024_06_11;
}());
exports.ScheduleOutput_2024_06_11 = ScheduleOutput_2024_06_11;
