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
exports.ByUsernames_2024_09_04 = exports.BySlug_2024_09_04 = exports.ById_2024_09_04 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var platform_enums_1 = require("@calcom/platform-enums");
var GetAvailableSlotsInput_2024_09_04 = /** @class */ (function () {
    function GetAvailableSlotsInput_2024_09_04() {
    }
    __decorate([
        (0, class_validator_1.IsDateString)(),
        (0, swagger_1.ApiProperty)({
            type: String,
            description: "\n      Time starting from which available slots should be checked.\n    \n      Must be in UTC timezone as ISO 8601 datestring.\n      \n      You can pass date without hours which defaults to start of day or specify hours:\n      2024-08-13 (will have hours 00:00:00 aka at very beginning of the date) or you can specify hours manually like 2024-08-13T09:00:00Z\n      ",
            example: "2050-09-05",
        }),
        __metadata("design:type", String)
    ], GetAvailableSlotsInput_2024_09_04.prototype, "start", void 0);
    __decorate([
        (0, class_validator_1.IsDateString)(),
        (0, swagger_1.ApiProperty)({
            type: String,
            description: "\n      Time until which available slots should be checked.\n      \n      Must be in UTC timezone as ISO 8601 datestring.\n      \n      You can pass date without hours which defaults to end of day or specify hours:\n      2024-08-20 (will have hours 23:59:59 aka at the very end of the date) or you can specify hours manually like 2024-08-20T18:00:00Z",
            example: "2050-09-06",
        }),
        __metadata("design:type", String)
    ], GetAvailableSlotsInput_2024_09_04.prototype, "end", void 0);
    __decorate([
        (0, class_validator_1.IsTimeZone)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: String,
            description: "Time zone in which the available slots should be returned. Defaults to UTC.",
            example: "Europe/Rome",
        }),
        __metadata("design:type", String)
    ], GetAvailableSlotsInput_2024_09_04.prototype, "timeZone", void 0);
    __decorate([
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value && parseInt(value);
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Number,
            description: "If event type has multiple possible durations then you can specify the desired duration here. Also, if you are fetching slots for a dynamic event then you can specify the duration her which defaults to 30, meaning that returned slots will be each 30 minutes long.",
            example: "60",
        }),
        __metadata("design:type", Number)
    ], GetAvailableSlotsInput_2024_09_04.prototype, "duration", void 0);
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
    ], GetAvailableSlotsInput_2024_09_04.prototype, "format", void 0);
    return GetAvailableSlotsInput_2024_09_04;
}());
var ById_2024_09_04 = /** @class */ (function (_super) {
    __extends(ById_2024_09_04, _super);
    function ById_2024_09_04() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value && parseInt(value);
        }),
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiProperty)({
            type: Number,
            description: "The ID of the event type for which available slots should be checked.",
            example: "100",
        }),
        __metadata("design:type", Number)
    ], ById_2024_09_04.prototype, "eventTypeId", void 0);
    return ById_2024_09_04;
}(GetAvailableSlotsInput_2024_09_04));
exports.ById_2024_09_04 = ById_2024_09_04;
var BySlug_2024_09_04 = /** @class */ (function (_super) {
    __extends(BySlug_2024_09_04, _super);
    function BySlug_2024_09_04() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            type: String,
            description: "The slug of the event type for which available slots should be checked.",
            example: "event-type-slug",
        }),
        __metadata("design:type", String)
    ], BySlug_2024_09_04.prototype, "eventTypeSlug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            type: String,
            description: "When searching by eventTypeSlug a username must be provided too aka username of the owner of the event type.",
            example: "bob",
        }),
        __metadata("design:type", String)
    ], BySlug_2024_09_04.prototype, "username", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({
            type: String,
            description: "Organzation slug in which the slots of event type belonging to the specified username should be checked.",
            example: "org-slug",
        }),
        __metadata("design:type", String)
    ], BySlug_2024_09_04.prototype, "organizationSlug", void 0);
    return BySlug_2024_09_04;
}(GetAvailableSlotsInput_2024_09_04));
exports.BySlug_2024_09_04 = BySlug_2024_09_04;
var ByUsernames_2024_09_04 = /** @class */ (function (_super) {
    __extends(ByUsernames_2024_09_04, _super);
    function ByUsernames_2024_09_04() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            if (typeof value === "string") {
                return value.split(",").map(function (username) { return username.trim(); });
            }
            return value;
        }),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ArrayMinSize)(2, { message: "The array must contain at least 2 elements." }),
        (0, class_validator_1.IsString)({ each: true }),
        (0, swagger_1.ApiProperty)({
            type: [String],
            description: "The usernames for which available slots should be checked.\n      \n      Checking slots by usernames is used mainly for dynamic event where there is no specific event but we just want to know when are 2 or more people available.\n      \n      Must contain at least 2 usernames e.g. ?usernames=alice,bob",
            example: ["username1", "username2"],
        }),
        __metadata("design:type", Array)
    ], ByUsernames_2024_09_04.prototype, "usernames", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            type: String,
            description: "Slug of the organization to which each user in the `usernames` array belongs.",
            example: "org-slug",
        }),
        __metadata("design:type", String)
    ], ByUsernames_2024_09_04.prototype, "organizationSlug", void 0);
    return ByUsernames_2024_09_04;
}(GetAvailableSlotsInput_2024_09_04));
exports.ByUsernames_2024_09_04 = ByUsernames_2024_09_04;
