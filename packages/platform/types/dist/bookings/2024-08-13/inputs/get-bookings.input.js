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
exports.GetBookingsInput_2024_08_13 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var Status;
(function (Status) {
    Status["upcoming"] = "upcoming";
    Status["recurring"] = "recurring";
    Status["past"] = "past";
    Status["cancelled"] = "cancelled";
    Status["unconfirmed"] = "unconfirmed";
})(Status || (Status = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder || (SortOrder = {}));
var GetBookingsInput_2024_08_13 = /** @class */ (function () {
    function GetBookingsInput_2024_08_13() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            if (typeof value === "string") {
                return value.split(",").map(function (status) { return status.trim(); });
            }
            return value;
        }),
        (0, class_validator_1.ArrayNotEmpty)({ message: "status cannot be empty." }),
        (0, class_validator_1.IsEnum)(Status, {
            each: true,
            message: "Invalid status. Allowed are upcoming, recurring, past, cancelled, unconfirmed",
        }),
        (0, swagger_1.ApiProperty)({
            required: false,
            description: "Filter bookings by status. If you want to filter by multiple statuses, separate them with a comma.",
            example: "?status=upcoming,past",
            enum: Status,
            isArray: true,
        }),
        __metadata("design:type", Array)
    ], GetBookingsInput_2024_08_13.prototype, "status", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({
            type: String,
            required: false,
            description: "Filter bookings by the attendee's email address.",
            example: "example@domain.com",
        }),
        __metadata("design:type", String)
    ], GetBookingsInput_2024_08_13.prototype, "attendeeEmail", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({
            type: String,
            required: false,
            description: "Filter bookings by the attendee's name.",
            example: "John Doe",
        }),
        __metadata("design:type", String)
    ], GetBookingsInput_2024_08_13.prototype, "attendeeName", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            if (typeof value === "string") {
                return value.split(",").map(function (eventTypeId) { return parseInt(eventTypeId); });
            }
            return value;
        }),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsNumber)({}, { each: true }),
        (0, class_validator_1.ArrayMinSize)(1, { message: "eventTypeIds must contain at least 1 event type id" }),
        (0, swagger_1.ApiProperty)({
            type: String,
            required: false,
            description: "Filter bookings by event type ids belonging to the user. Event type ids must be separated by a comma.",
            example: "?eventTypeIds=100,200",
        }),
        __metadata("design:type", Array)
    ], GetBookingsInput_2024_08_13.prototype, "eventTypeIds", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, swagger_1.ApiProperty)({
            type: String,
            required: false,
            description: "Filter bookings by event type id belonging to the user.",
            example: "?eventTypeId=100",
        }),
        __metadata("design:type", Number)
    ], GetBookingsInput_2024_08_13.prototype, "eventTypeId", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            if (typeof value === "string") {
                return value.split(",").map(function (teamId) { return parseInt(teamId); });
            }
            return value;
        }),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsNumber)({}, { each: true }),
        (0, class_validator_1.ArrayMinSize)(1, { message: "teamIds must contain at least 1 team id" }),
        (0, swagger_1.ApiProperty)({
            type: String,
            required: false,
            description: "Filter bookings by team ids that user is part of. Team ids must be separated by a comma.",
            example: "?teamIds=50,60",
        }),
        __metadata("design:type", Array)
    ], GetBookingsInput_2024_08_13.prototype, "teamsIds", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        (0, swagger_1.ApiProperty)({
            type: String,
            required: false,
            description: "Filter bookings by team id that user is part of",
            example: "?teamId=50",
        }),
        __metadata("design:type", Number)
    ], GetBookingsInput_2024_08_13.prototype, "teamId", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsISO8601)({ strict: true }, { message: "fromDate must be a valid ISO 8601 date." }),
        (0, swagger_1.ApiProperty)({
            type: String,
            required: false,
            description: "Filter bookings with start after this date string.",
            example: "?afterStart=2025-03-07T10:00:00.000Z",
        }),
        __metadata("design:type", String)
    ], GetBookingsInput_2024_08_13.prototype, "afterStart", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsISO8601)({ strict: true }, { message: "toDate must be a valid ISO 8601 date." }),
        (0, swagger_1.ApiProperty)({
            type: String,
            required: false,
            description: "Filter bookings with end before this date string.",
            example: "?beforeEnd=2025-03-07T11:00:00.000Z",
        }),
        __metadata("design:type", String)
    ], GetBookingsInput_2024_08_13.prototype, "beforeEnd", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsISO8601)({ strict: true }, { message: "fromDate must be a valid ISO 8601 date." }),
        (0, swagger_1.ApiProperty)({
            type: String,
            required: false,
            description: "Filter bookings that have been updated after this date string.",
            example: "?afterUpdatedAt=2025-03-07T10:00:00.000Z",
        }),
        __metadata("design:type", String)
    ], GetBookingsInput_2024_08_13.prototype, "afterUpdatedAt", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsISO8601)({ strict: true }, { message: "toDate must be a valid ISO 8601 date." }),
        (0, swagger_1.ApiProperty)({
            type: String,
            required: false,
            description: "Filter bookings that have been updated before this date string.",
            example: "?beforeUpdatedAt=2025-03-14T11:00:00.000Z",
        }),
        __metadata("design:type", String)
    ], GetBookingsInput_2024_08_13.prototype, "beforeUpdatedAt", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(SortOrder, {
            message: 'SortStart must be either "asc" or "desc".',
        }),
        (0, swagger_1.ApiProperty)({
            required: false,
            description: "Sort results by their start time in ascending or descending order.",
            example: "?sortStart=asc OR ?sortStart=desc",
            enum: SortOrder,
        }),
        __metadata("design:type", String)
    ], GetBookingsInput_2024_08_13.prototype, "sortStart", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(SortOrder, {
            message: 'SortEnd must be either "asc" or "desc".',
        }),
        (0, swagger_1.ApiProperty)({
            required: false,
            description: "Sort results by their end time in ascending or descending order.",
            example: "?sortEnd=asc OR ?sortEnd=desc",
            enum: SortOrder,
        }),
        __metadata("design:type", String)
    ], GetBookingsInput_2024_08_13.prototype, "sortEnd", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(SortOrder, {
            message: 'SortCreated must be either "asc" or "desc".',
        }),
        (0, swagger_1.ApiProperty)({
            required: false,
            description: "Sort results by their creation time (when booking was made) in ascending or descending order.",
            example: "?sortCreated=asc OR ?sortCreated=desc",
            enum: SortOrder,
        }),
        __metadata("design:type", String)
    ], GetBookingsInput_2024_08_13.prototype, "sortCreated", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(SortOrder, {
            message: 'SortCreated must be either "asc" or "desc".',
        }),
        (0, swagger_1.ApiProperty)({
            required: false,
            description: "Sort results by their updated time (for example when booking status changes) in ascending or descending order.",
            example: "?sortUpdated=asc OR ?sortUpdated=desc",
            enum: SortOrder,
        }),
        __metadata("design:type", String)
    ], GetBookingsInput_2024_08_13.prototype, "sortUpdatedAt", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false, description: "The number of items to return", example: 10 }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value && parseInt(value);
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(1),
        (0, class_validator_1.Max)(250),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], GetBookingsInput_2024_08_13.prototype, "take", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false, description: "The number of items to skip", example: 0 }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value && parseInt(value);
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(0),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], GetBookingsInput_2024_08_13.prototype, "skip", void 0);
    return GetBookingsInput_2024_08_13;
}());
exports.GetBookingsInput_2024_08_13 = GetBookingsInput_2024_08_13;
