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
exports.UpdateScheduleInput_2024_06_11 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var create_schedule_input_1 = require("./create-schedule.input");
var UpdateScheduleInput_2024_06_11 = /** @class */ (function () {
    function UpdateScheduleInput_2024_06_11() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({ type: String, example: "One-on-one coaching" }),
        __metadata("design:type", String)
    ], UpdateScheduleInput_2024_06_11.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsTimeZone)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({ type: String, example: "Europe/Rome" }),
        __metadata("design:type", String)
    ], UpdateScheduleInput_2024_06_11.prototype, "timeZone", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return create_schedule_input_1.ScheduleAvailabilityInput_2024_06_11; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: [create_schedule_input_1.ScheduleAvailabilityInput_2024_06_11],
            example: [
                {
                    days: ["Monday", "Tuesday"],
                    startTime: "09:00",
                    endTime: "10:00",
                },
            ],
        }),
        __metadata("design:type", Array)
    ], UpdateScheduleInput_2024_06_11.prototype, "availability", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({ type: Boolean, example: true }),
        __metadata("design:type", Boolean)
    ], UpdateScheduleInput_2024_06_11.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return create_schedule_input_1.ScheduleOverrideInput_2024_06_11; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: [create_schedule_input_1.ScheduleOverrideInput_2024_06_11],
            example: [
                {
                    date: "2024-05-20",
                    startTime: "12:00",
                    endTime: "14:00",
                },
            ],
        }),
        __metadata("design:type", Array)
    ], UpdateScheduleInput_2024_06_11.prototype, "overrides", void 0);
    return UpdateScheduleInput_2024_06_11;
}());
exports.UpdateScheduleInput_2024_06_11 = UpdateScheduleInput_2024_06_11;
