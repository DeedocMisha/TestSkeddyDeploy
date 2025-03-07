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
exports.ReserveSlotInput_2024_04_15 = exports.RemoveSelectedSlotInput_2024_04_15 = exports.GetAvailableSlotsInput_2024_04_15 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var platform_enums_1 = require("@calcom/platform-enums");
var GetAvailableSlotsInput_2024_04_15 = /** @class */ (function () {
    function GetAvailableSlotsInput_2024_04_15() {
    }
    __decorate([
        (0, class_validator_1.IsDateString)(),
        (0, swagger_1.ApiProperty)({
            description: "Start date string starting from which to fetch slots in UTC timezone.",
            example: "2022-06-14T00:00:00.000Z",
        }),
        __metadata("design:type", String)
    ], GetAvailableSlotsInput_2024_04_15.prototype, "startTime", void 0);
    __decorate([
        (0, class_validator_1.IsDateString)(),
        (0, swagger_1.ApiProperty)({
            description: "End date string until which to fetch slots in UTC timezone.",
            example: "2022-06-14T23:59:59.999Z",
        }),
        __metadata("design:type", String)
    ], GetAvailableSlotsInput_2024_04_15.prototype, "endTime", void 0);
    __decorate([
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value && parseInt(value);
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({ description: "Event Type ID for which slots are being fetched.", example: 100 }),
        __metadata("design:type", Number)
    ], GetAvailableSlotsInput_2024_04_15.prototype, "eventTypeId", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Slug of the event type for which slots are being fetched. If event slug is provided then username must be provided too as query parameter `usernameList[]=username`",
        }),
        __metadata("design:type", String)
    ], GetAvailableSlotsInput_2024_04_15.prototype, "eventTypeSlug", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsString)({ each: true }),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [String],
            description: "Only if eventTypeSlug is provided or for dynamic events - list of usernames for which slots are being fetched.",
            example: "usernameList[]=bob",
        }),
        __metadata("design:type", Array)
    ], GetAvailableSlotsInput_2024_04_15.prototype, "usernameList", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], GetAvailableSlotsInput_2024_04_15.prototype, "debug", void 0);
    __decorate([
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value && parseInt(value);
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.Min)(1, { message: "Duration must be a positive number" }),
        (0, swagger_1.ApiPropertyOptional)({ description: "Only for dynamic events - length of returned slots." }),
        __metadata("design:type", Number)
    ], GetAvailableSlotsInput_2024_04_15.prototype, "duration", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true }),
        __metadata("design:type", Object)
    ], GetAvailableSlotsInput_2024_04_15.prototype, "rescheduleUid", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], GetAvailableSlotsInput_2024_04_15.prototype, "timeZone", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({ description: "Organization slug." }),
        __metadata("design:type", String)
    ], GetAvailableSlotsInput_2024_04_15.prototype, "orgSlug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsEnum)(platform_enums_1.SlotFormat, {
            message: "slotFormat must be either 'range' or 'time'",
        }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            if (!value)
                return undefined;
            return value.toLowerCase();
        }),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Format of slot times in response. Use 'range' to get start and end times.",
            example: "range",
            enum: platform_enums_1.SlotFormat,
        }),
        __metadata("design:type", String)
    ], GetAvailableSlotsInput_2024_04_15.prototype, "slotFormat", void 0);
    __decorate([
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value && value.toLowerCase() === "true";
        }),
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiHideProperty)(),
        __metadata("design:type", Boolean)
    ], GetAvailableSlotsInput_2024_04_15.prototype, "skipContactOwner", void 0);
    __decorate([
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value && value.toLowerCase() === "true";
        }),
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiHideProperty)(),
        __metadata("design:type", Boolean)
    ], GetAvailableSlotsInput_2024_04_15.prototype, "shouldServeCache", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            if (Array.isArray(value)) {
                return value.map(function (s) { return parseInt(s); });
            }
            return value;
        }),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsNumber)({}, { each: true }),
        (0, swagger_1.ApiHideProperty)(),
        __metadata("design:type", Array)
    ], GetAvailableSlotsInput_2024_04_15.prototype, "routedTeamMemberIds", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], GetAvailableSlotsInput_2024_04_15.prototype, "teamMemberEmail", void 0);
    return GetAvailableSlotsInput_2024_04_15;
}());
exports.GetAvailableSlotsInput_2024_04_15 = GetAvailableSlotsInput_2024_04_15;
var RemoveSelectedSlotInput_2024_04_15 = /** @class */ (function () {
    function RemoveSelectedSlotInput_2024_04_15() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({
            description: "Unique identifier for the slot to be removed.",
            example: "e2a7bcf9-cc7b-40a0-80d3-657d391775a6",
            required: true,
        }),
        __metadata("design:type", String)
    ], RemoveSelectedSlotInput_2024_04_15.prototype, "uid", void 0);
    return RemoveSelectedSlotInput_2024_04_15;
}());
exports.RemoveSelectedSlotInput_2024_04_15 = RemoveSelectedSlotInput_2024_04_15;
var ReserveSlotInput_2024_04_15 = /** @class */ (function () {
    function ReserveSlotInput_2024_04_15() {
    }
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, swagger_1.ApiProperty)({ description: "Event Type ID for which timeslot is being reserved.", example: 100 }),
        __metadata("design:type", Number)
    ], ReserveSlotInput_2024_04_15.prototype, "eventTypeId", void 0);
    __decorate([
        (0, class_validator_1.IsDateString)(),
        (0, swagger_1.ApiProperty)({
            description: "Start date of the slot in UTC timezone.",
            example: "2022-06-14T00:00:00.000Z",
        }),
        __metadata("design:type", String)
    ], ReserveSlotInput_2024_04_15.prototype, "slotUtcStartDate", void 0);
    __decorate([
        (0, class_validator_1.IsDateString)(),
        (0, swagger_1.ApiProperty)({ description: "End date of the slot in UTC timezone.", example: "2022-06-14T00:30:00.000Z" }),
        __metadata("design:type", String)
    ], ReserveSlotInput_2024_04_15.prototype, "slotUtcEndDate", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Optional but only for events with seats. Used to retrieve booking of a seated event.",
        }),
        __metadata("design:type", String)
    ], ReserveSlotInput_2024_04_15.prototype, "bookingUid", void 0);
    return ReserveSlotInput_2024_04_15;
}());
exports.ReserveSlotInput_2024_04_15 = ReserveSlotInput_2024_04_15;
