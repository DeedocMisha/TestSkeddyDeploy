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
exports.ReassignBookingOutput_2024_08_13 = exports.CreateRecurringSeatedBookingOutput_2024_08_13 = exports.CreateSeatedBookingOutput_2024_08_13 = exports.GetRecurringSeatedBookingOutput_2024_08_13 = exports.GetSeatedBookingOutput_2024_08_13 = exports.RecurringBookingOutput_2024_08_13 = exports.BookingOutput_2024_08_13 = exports.SeatedAttendee = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var language_1 = require("../inputs/language");
var Attendee = /** @class */ (function () {
    function Attendee() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "John Doe" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], Attendee.prototype, "name", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "john@example.com" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], Attendee.prototype, "email", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "America/New_York" }),
        (0, class_validator_1.IsTimeZone)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], Attendee.prototype, "timeZone", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ enum: language_1.BookingLanguage, example: "en" }),
        (0, class_validator_1.IsEnum)(language_1.BookingLanguage),
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], Attendee.prototype, "language", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: Boolean, example: false }),
        (0, class_validator_1.IsBoolean)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Boolean)
    ], Attendee.prototype, "absent", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: String, example: "+1234567890" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], Attendee.prototype, "phoneNumber", void 0);
    return Attendee;
}());
var SeatedAttendee = /** @class */ (function (_super) {
    __extends(SeatedAttendee, _super);
    function SeatedAttendee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "3be561a9-31f1-4b8e-aefc-9d9a085f0dd1" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], SeatedAttendee.prototype, "seatUid", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: Object,
            description: "Booking field responses consisting of an object with booking field slug as keys and user response as values.",
            example: { customField: "customValue" },
            required: true,
        }),
        (0, class_validator_1.IsObject)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Object)
    ], SeatedAttendee.prototype, "bookingFieldsResponses", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({
            type: Object,
            example: { key: "value" },
        }),
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Object)
    ], SeatedAttendee.prototype, "metadata", void 0);
    return SeatedAttendee;
}(Attendee));
exports.SeatedAttendee = SeatedAttendee;
var BookingHost = /** @class */ (function () {
    function BookingHost() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: Number, example: 1 }),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Number)
    ], BookingHost.prototype, "id", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "Jane Doe" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BookingHost.prototype, "name", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "jane100@example.com" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BookingHost.prototype, "email", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "jane100" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BookingHost.prototype, "username", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "America/Los_Angeles" }),
        (0, class_validator_1.IsTimeZone)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BookingHost.prototype, "timeZone", void 0);
    return BookingHost;
}());
var EventType = /** @class */ (function () {
    function EventType() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: Number, example: 1 }),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Number)
    ], EventType.prototype, "id", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "some-event" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], EventType.prototype, "slug", void 0);
    return EventType;
}());
var BaseBookingOutput_2024_08_13 = /** @class */ (function () {
    function BaseBookingOutput_2024_08_13() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: Number, example: 123 }),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Number)
    ], BaseBookingOutput_2024_08_13.prototype, "id", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "booking_uid_123" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BaseBookingOutput_2024_08_13.prototype, "uid", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "Consultation" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BaseBookingOutput_2024_08_13.prototype, "title", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "Learn how to integrate scheduling into marketplace." }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BaseBookingOutput_2024_08_13.prototype, "description", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: [BookingHost] }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return BookingHost; }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Array)
    ], BaseBookingOutput_2024_08_13.prototype, "hosts", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ enum: ["cancelled", "accepted", "rejected", "pending"], example: "accepted" }),
        (0, class_validator_1.IsEnum)(["cancelled", "accepted", "rejected", "pending"]),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BaseBookingOutput_2024_08_13.prototype, "status", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: String, example: "User requested cancellation" }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BaseBookingOutput_2024_08_13.prototype, "cancellationReason", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: String, example: "canceller@example.com" }),
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BaseBookingOutput_2024_08_13.prototype, "cancelledByEmail", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: String, example: "User rescheduled the event" }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BaseBookingOutput_2024_08_13.prototype, "reschedulingReason", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: String, example: "rescheduler@example.com" }),
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BaseBookingOutput_2024_08_13.prototype, "rescheduledByEmail", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: String, example: "previous_uid_123" }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BaseBookingOutput_2024_08_13.prototype, "rescheduledFromUid", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "2024-08-13T15:30:00Z" }),
        (0, class_validator_1.IsDateString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BaseBookingOutput_2024_08_13.prototype, "start", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "2024-08-13T16:30:00Z" }),
        (0, class_validator_1.IsDateString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BaseBookingOutput_2024_08_13.prototype, "end", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: Number, example: 60 }),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Number)
    ], BaseBookingOutput_2024_08_13.prototype, "duration", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: Number,
            example: 50,
            deprecated: true,
            description: "Deprecated - rely on 'eventType' object containing the id instead.",
        }),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Number)
    ], BaseBookingOutput_2024_08_13.prototype, "eventTypeId", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: EventType }),
        (0, class_transformer_1.Type)(function () { return EventType; }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", EventType)
    ], BaseBookingOutput_2024_08_13.prototype, "eventType", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({
            type: String,
            description: "Deprecated - rely on 'location' field instead.",
            example: "https://example.com/recurring-meeting",
            deprecated: true,
        }),
        (0, class_validator_1.IsUrl)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BaseBookingOutput_2024_08_13.prototype, "meetingUrl", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "https://example.com/meeting" }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BaseBookingOutput_2024_08_13.prototype, "location", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
        (0, class_validator_1.IsBoolean)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Boolean)
    ], BaseBookingOutput_2024_08_13.prototype, "absentHost", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "2024-08-13T15:30:00Z" }),
        (0, class_validator_1.IsDateString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], BaseBookingOutput_2024_08_13.prototype, "createdAt", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "2024-08-13T15:30:00Z" }),
        (0, class_validator_1.IsDateString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Object)
    ], BaseBookingOutput_2024_08_13.prototype, "updatedAt", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({
            type: Object,
            example: { key: "value" },
        }),
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Object)
    ], BaseBookingOutput_2024_08_13.prototype, "metadata", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: Number, example: 4 }),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Number)
    ], BaseBookingOutput_2024_08_13.prototype, "rating", void 0);
    return BaseBookingOutput_2024_08_13;
}());
var BookingOutput_2024_08_13 = /** @class */ (function (_super) {
    __extends(BookingOutput_2024_08_13, _super);
    function BookingOutput_2024_08_13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: [Attendee] }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return Attendee; }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Array)
    ], BookingOutput_2024_08_13.prototype, "attendees", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({
            type: [String],
            example: ["guest1@example.com", "guest2@example.com"],
        }),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsString)({ each: true }),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Array)
    ], BookingOutput_2024_08_13.prototype, "guests", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: Object,
            description: "Booking field responses consisting of an object with booking field slug as keys and user response as values.",
            example: { customField: "customValue" },
        }),
        (0, class_validator_1.IsObject)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Object)
    ], BookingOutput_2024_08_13.prototype, "bookingFieldsResponses", void 0);
    return BookingOutput_2024_08_13;
}(BaseBookingOutput_2024_08_13));
exports.BookingOutput_2024_08_13 = BookingOutput_2024_08_13;
var RecurringBookingOutput_2024_08_13 = /** @class */ (function (_super) {
    __extends(RecurringBookingOutput_2024_08_13, _super);
    function RecurringBookingOutput_2024_08_13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "recurring_uid_987" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], RecurringBookingOutput_2024_08_13.prototype, "recurringBookingUid", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: Object,
            description: "Booking field responses consisting of an object with booking field slug as keys and user response as values.",
            example: { customField: "customValue" },
        }),
        (0, class_validator_1.IsObject)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Object)
    ], RecurringBookingOutput_2024_08_13.prototype, "bookingFieldsResponses", void 0);
    return RecurringBookingOutput_2024_08_13;
}(BookingOutput_2024_08_13));
exports.RecurringBookingOutput_2024_08_13 = RecurringBookingOutput_2024_08_13;
var GetSeatedBookingOutput_2024_08_13 = /** @class */ (function (_super) {
    __extends(GetSeatedBookingOutput_2024_08_13, _super);
    function GetSeatedBookingOutput_2024_08_13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: [SeatedAttendee] }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return SeatedAttendee; }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Array)
    ], GetSeatedBookingOutput_2024_08_13.prototype, "attendees", void 0);
    return GetSeatedBookingOutput_2024_08_13;
}(BaseBookingOutput_2024_08_13));
exports.GetSeatedBookingOutput_2024_08_13 = GetSeatedBookingOutput_2024_08_13;
var GetRecurringSeatedBookingOutput_2024_08_13 = /** @class */ (function (_super) {
    __extends(GetRecurringSeatedBookingOutput_2024_08_13, _super);
    function GetRecurringSeatedBookingOutput_2024_08_13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: [SeatedAttendee] }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return SeatedAttendee; }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Array)
    ], GetRecurringSeatedBookingOutput_2024_08_13.prototype, "attendees", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "recurring_uid_987" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], GetRecurringSeatedBookingOutput_2024_08_13.prototype, "recurringBookingUid", void 0);
    return GetRecurringSeatedBookingOutput_2024_08_13;
}(BaseBookingOutput_2024_08_13));
exports.GetRecurringSeatedBookingOutput_2024_08_13 = GetRecurringSeatedBookingOutput_2024_08_13;
// note(Lauris): CreateSeatedBookingOutput_2024_08_13 is the same as GetSeatedBookingOutput_2024_08_13 except it has seatUid, so instead of extending BaseBookingOutput_2024_08_13
// we could extend GetSeatedBookingOutput_2024_08_13 but the problem then is that attendees end up at the top of the response even above id
// or uid keys making it harder to read and understand the response, so i decided to duplicate the fields here and the response is as expected - with seatUid and attendees at the bottom.
var CreateSeatedBookingOutput_2024_08_13 = /** @class */ (function (_super) {
    __extends(CreateSeatedBookingOutput_2024_08_13, _super);
    function CreateSeatedBookingOutput_2024_08_13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "3be561a9-31f1-4b8e-aefc-9d9a085f0dd1" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], CreateSeatedBookingOutput_2024_08_13.prototype, "seatUid", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: [SeatedAttendee] }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return SeatedAttendee; }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Array)
    ], CreateSeatedBookingOutput_2024_08_13.prototype, "attendees", void 0);
    return CreateSeatedBookingOutput_2024_08_13;
}(BaseBookingOutput_2024_08_13));
exports.CreateSeatedBookingOutput_2024_08_13 = CreateSeatedBookingOutput_2024_08_13;
// note(Lauris): CreateRecurringSeatedBookingOutput_2024_08_13 is the same as GetRecurringSeatedBookingOutput_2024_08_13 except it has seatUid, so instead of extending BaseBookingOutput_2024_08_13
// we could extend GetRecurringSeatedBookingOutput_2024_08_13 but the problem then is that attendees and recurringBookingUid end up at the top of the response even above id
// or uid keys making it harder to read and understand the response, so i decided to duplicate the fields here and the response is as expected - with seatUid, attendees and recurringBookingUid at the bottom.
var CreateRecurringSeatedBookingOutput_2024_08_13 = /** @class */ (function (_super) {
    __extends(CreateRecurringSeatedBookingOutput_2024_08_13, _super);
    function CreateRecurringSeatedBookingOutput_2024_08_13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "3be561a9-31f1-4b8e-aefc-9d9a085f0dd1" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], CreateRecurringSeatedBookingOutput_2024_08_13.prototype, "seatUid", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: [SeatedAttendee] }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return SeatedAttendee; }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Array)
    ], CreateRecurringSeatedBookingOutput_2024_08_13.prototype, "attendees", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "recurring_uid_987" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], CreateRecurringSeatedBookingOutput_2024_08_13.prototype, "recurringBookingUid", void 0);
    return CreateRecurringSeatedBookingOutput_2024_08_13;
}(BaseBookingOutput_2024_08_13));
exports.CreateRecurringSeatedBookingOutput_2024_08_13 = CreateRecurringSeatedBookingOutput_2024_08_13;
var ReassignedToDto = /** @class */ (function () {
    function ReassignedToDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: Number, example: 123 }),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Number)
    ], ReassignedToDto.prototype, "id", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "John Doe" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], ReassignedToDto.prototype, "name", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "john.doe@example.com" }),
        (0, class_validator_1.IsEmail)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], ReassignedToDto.prototype, "email", void 0);
    return ReassignedToDto;
}());
var ReassignBookingOutput_2024_08_13 = /** @class */ (function () {
    function ReassignBookingOutput_2024_08_13() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String, example: "booking_uid_123" }),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], ReassignBookingOutput_2024_08_13.prototype, "bookingUid", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: ReassignedToDto }),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return ReassignedToDto; }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", ReassignedToDto)
    ], ReassignBookingOutput_2024_08_13.prototype, "reassignedTo", void 0);
    return ReassignBookingOutput_2024_08_13;
}());
exports.ReassignBookingOutput_2024_08_13 = ReassignBookingOutput_2024_08_13;
