"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.UpdateScheduleInput_2024_04_15 = exports.schemaScheduleResponse_2024_04_15 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var luxon_1 = require("luxon");
var zod_1 = require("zod");
var scheduleSchema_2024_04_15 = zod_1.z.object({
    id: zod_1.z.number().int(),
    userId: zod_1.z.number().int(),
    name: zod_1.z.string(),
    timeZone: zod_1.z.string().nullish(),
});
var availabilitySchema_2024_04_15 = zod_1.z.object({
    id: zod_1.z.number().int(),
    days: zod_1.z.number().int().array(),
    startTime: zod_1.z.date(),
    endTime: zod_1.z.date(),
});
exports.schemaScheduleResponse_2024_04_15 = zod_1.z
    .object({})
    .merge(scheduleSchema_2024_04_15)
    .merge(zod_1.z.object({
    availability: zod_1.z
        .array(availabilitySchema_2024_04_15)
        .transform(function (availabilities) {
        return availabilities.map(function (availability) { return (__assign(__assign({}, availability), { startTime: luxon_1.DateTime.fromJSDate(availability.startTime).toUTC().toFormat("HH:mm:ss"), endTime: luxon_1.DateTime.fromJSDate(availability.endTime).toUTC().toFormat("HH:mm:ss") })); });
    })
        .optional(),
}));
var ScheduleItem = /** @class */ (function () {
    function ScheduleItem() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", Date)
    ], ScheduleItem.prototype, "start", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", Date)
    ], ScheduleItem.prototype, "end", void 0);
    return ScheduleItem;
}());
var DateOverride = /** @class */ (function () {
    function DateOverride() {
    }
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        __metadata("design:type", Date)
    ], DateOverride.prototype, "start", void 0);
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        __metadata("design:type", Date)
    ], DateOverride.prototype, "end", void 0);
    return DateOverride;
}());
var UpdateScheduleInput_2024_04_15 = /** @class */ (function () {
    function UpdateScheduleInput_2024_04_15() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], UpdateScheduleInput_2024_04_15.prototype, "timeZone", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], UpdateScheduleInput_2024_04_15.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], UpdateScheduleInput_2024_04_15.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return ScheduleItem; }),
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsArray)(),
        (0, swagger_1.ApiProperty)({
            type: [[ScheduleItem]],
            example: [
                [],
                [{ start: "2022-01-01T00:00:00.000Z", end: "2022-01-02T00:00:00.000Z" }],
                [],
                [],
                [],
                [],
                [],
            ],
            isArray: true,
        }),
        __metadata("design:type", Array)
    ], UpdateScheduleInput_2024_04_15.prototype, "schedule", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return DateOverride; }),
        (0, class_validator_1.IsArray)(),
        (0, swagger_1.ApiProperty)(),
        (0, swagger_1.ApiProperty)({
            type: [DateOverride],
            example: [
                [],
                [{ start: "2022-01-01T00:00:00.000Z", end: "2022-01-02T00:00:00.000Z" }],
                [],
                [],
                [],
                [],
                [],
            ],
            isArray: true,
            required: false,
        }),
        __metadata("design:type", Array)
    ], UpdateScheduleInput_2024_04_15.prototype, "dateOverrides", void 0);
    return UpdateScheduleInput_2024_04_15;
}());
exports.UpdateScheduleInput_2024_04_15 = UpdateScheduleInput_2024_04_15;
