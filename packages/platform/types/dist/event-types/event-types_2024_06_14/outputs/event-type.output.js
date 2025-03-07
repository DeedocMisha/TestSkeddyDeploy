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
exports.TeamEventTypeOutput_2024_06_14 = exports.EventTypeOutput_2024_06_14 = exports.TeamEventTypeResponseHost = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var inputs_1 = require("../inputs");
var inputs_2 = require("../inputs");
var booker_layouts_input_1 = require("../inputs/booker-layouts.input");
var destination_calendar_input_1 = require("../inputs/destination-calendar.input");
var booking_fields_output_1 = require("../outputs/booking-fields.output");
var booking_fields_output_2 = require("./booking-fields.output");
var locations_output_1 = require("./locations.output");
var SchedulingTypeEnum;
(function (SchedulingTypeEnum) {
    SchedulingTypeEnum["ROUND_ROBIN"] = "ROUND_ROBIN";
    SchedulingTypeEnum["COLLECTIVE"] = "COLLECTIVE";
    SchedulingTypeEnum["MANAGED"] = "MANAGED";
})(SchedulingTypeEnum || (SchedulingTypeEnum = {}));
var User_2024_06_14 = /** @class */ (function () {
    function User_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Number)
    ], User_2024_06_14.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ nullable: true }),
        __metadata("design:type", Object)
    ], User_2024_06_14.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ nullable: true, type: String }),
        __metadata("design:type", Object)
    ], User_2024_06_14.prototype, "username", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ nullable: true, type: String }),
        __metadata("design:type", Object)
    ], User_2024_06_14.prototype, "avatarUrl", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ type: String }),
        __metadata("design:type", String)
    ], User_2024_06_14.prototype, "weekStart", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
        __metadata("design:type", Object)
    ], User_2024_06_14.prototype, "brandColor", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
        __metadata("design:type", Object)
    ], User_2024_06_14.prototype, "darkBrandColor", void 0);
    __decorate([
        (0, class_transformer_1.Type)(function () { return Object; }),
        (0, swagger_1.ApiProperty)({ type: Object }),
        __metadata("design:type", Object)
    ], User_2024_06_14.prototype, "metadata", void 0);
    return User_2024_06_14;
}());
var EventTypeTeam = /** @class */ (function () {
    function EventTypeTeam() {
    }
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Number)
    ], EventTypeTeam.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], EventTypeTeam.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], EventTypeTeam.prototype, "bannerUrl", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], EventTypeTeam.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], EventTypeTeam.prototype, "logoUrl", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], EventTypeTeam.prototype, "weekStart", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], EventTypeTeam.prototype, "brandColor", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], EventTypeTeam.prototype, "darkBrandColor", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], EventTypeTeam.prototype, "theme", void 0);
    return EventTypeTeam;
}());
var BaseEventTypeOutput_2024_06_14 = /** @class */ (function () {
    function BaseEventTypeOutput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, swagger_1.ApiProperty)({ example: 1 }),
        __metadata("design:type", Number)
    ], BaseEventTypeOutput_2024_06_14.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(1),
        (0, swagger_1.ApiProperty)({ example: 60 }),
        __metadata("design:type", Number)
    ], BaseEventTypeOutput_2024_06_14.prototype, "lengthInMinutes", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ArrayNotEmpty)(),
        (0, class_validator_1.ArrayUnique)(),
        (0, class_validator_1.IsInt)({ each: true }),
        (0, class_validator_1.Min)(1, { each: true }),
        (0, swagger_1.ApiPropertyOptional)({
            type: [Number],
            example: [15, 30, 60],
            description: "If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.",
        }),
        __metadata("design:type", Array)
    ], BaseEventTypeOutput_2024_06_14.prototype, "lengthInMinutesOptions", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "Learn the secrets of masterchief!" }),
        __metadata("design:type", String)
    ], BaseEventTypeOutput_2024_06_14.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "learn-the-secrets-of-masterchief" }),
        __metadata("design:type", String)
    ], BaseEventTypeOutput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            example: "Discover the culinary wonders of Argentina by making the best flan ever!",
        }),
        __metadata("design:type", String)
    ], BaseEventTypeOutput_2024_06_14.prototype, "description", void 0);
    __decorate([
        (0, locations_output_1.ValidateOutputLocations_2024_06_14)(),
        (0, swagger_1.ApiProperty)({
            required: true,
            oneOf: [
                { $ref: (0, swagger_1.getSchemaPath)(locations_output_1.OutputAddressLocation_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(locations_output_1.OutputLinkLocation_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(locations_output_1.OutputIntegrationLocation_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(locations_output_1.OutputPhoneLocation_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(locations_output_1.OutputConferencingLocation_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(locations_output_1.OutputUnknownLocation_2024_06_14) },
            ],
            type: "array",
        }),
        (0, class_transformer_1.Type)(function () { return Object; }),
        __metadata("design:type", Array)
    ], BaseEventTypeOutput_2024_06_14.prototype, "locations", void 0);
    __decorate([
        (0, booking_fields_output_2.ValidateOutputBookingFields_2024_06_14)(),
        (0, swagger_1.ApiProperty)(),
        (0, swagger_1.ApiProperty)({
            required: true,
            oneOf: [
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.NameDefaultFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.EmailDefaultFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.LocationDefaultFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.RescheduleReasonDefaultFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.TitleDefaultFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.NotesDefaultFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.GuestsDefaultFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.PhoneFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.AddressFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.TextFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.NumberFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.TextAreaFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.SelectFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.MultiSelectFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.MultiEmailFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.CheckboxGroupFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.RadioGroupFieldOutput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_output_1.BooleanFieldOutput_2024_06_14) },
            ],
            type: "array",
        }),
        (0, class_transformer_1.Type)(function () { return Object; }),
        __metadata("design:type", Array)
    ], BaseEventTypeOutput_2024_06_14.prototype, "bookingFields", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], BaseEventTypeOutput_2024_06_14.prototype, "disableGuests", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({ example: 60, nullable: true }),
        __metadata("design:type", Object)
    ], BaseEventTypeOutput_2024_06_14.prototype, "slotInterval", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(0),
        (0, swagger_1.ApiPropertyOptional)({ example: 0 }),
        __metadata("design:type", Number)
    ], BaseEventTypeOutput_2024_06_14.prototype, "minimumBookingNotice", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(0),
        (0, swagger_1.ApiPropertyOptional)({ example: 0 }),
        __metadata("design:type", Number)
    ], BaseEventTypeOutput_2024_06_14.prototype, "beforeEventBuffer", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(0),
        (0, swagger_1.ApiPropertyOptional)({ example: 0 }),
        __metadata("design:type", Number)
    ], BaseEventTypeOutput_2024_06_14.prototype, "afterEventBuffer", void 0);
    __decorate([
        (0, class_transformer_1.Type)(function () { return inputs_2.Recurrence_2024_06_14; }),
        (0, swagger_1.ApiProperty)({
            type: inputs_2.Recurrence_2024_06_14,
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], BaseEventTypeOutput_2024_06_14.prototype, "recurrence", void 0);
    __decorate([
        (0, class_transformer_1.Type)(function () { return Object; }),
        (0, swagger_1.ApiProperty)({
            type: Object,
        }),
        __metadata("design:type", Object)
    ], BaseEventTypeOutput_2024_06_14.prototype, "metadata", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Number)
    ], BaseEventTypeOutput_2024_06_14.prototype, "price", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], BaseEventTypeOutput_2024_06_14.prototype, "currency", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], BaseEventTypeOutput_2024_06_14.prototype, "lockTimeZoneToggleOnBookingPage", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, swagger_1.ApiPropertyOptional)({ nullable: true }),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], BaseEventTypeOutput_2024_06_14.prototype, "seatsPerTimeSlot", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({ nullable: true }),
        __metadata("design:type", Object)
    ], BaseEventTypeOutput_2024_06_14.prototype, "forwardParamsSuccessRedirect", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ nullable: true }),
        __metadata("design:type", Object)
    ], BaseEventTypeOutput_2024_06_14.prototype, "successRedirectUrl", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], BaseEventTypeOutput_2024_06_14.prototype, "isInstantEvent", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)({ type: Boolean, nullable: true }),
        __metadata("design:type", Object)
    ], BaseEventTypeOutput_2024_06_14.prototype, "seatsShowAvailabilityCount", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, swagger_1.ApiProperty)({ type: Number, nullable: true }),
        __metadata("design:type", Object)
    ], BaseEventTypeOutput_2024_06_14.prototype, "scheduleId", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Object)
    ], BaseEventTypeOutput_2024_06_14.prototype, "bookingLimitsCount", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], BaseEventTypeOutput_2024_06_14.prototype, "onlyShowFirstAvailableSlot", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Object)
    ], BaseEventTypeOutput_2024_06_14.prototype, "bookingLimitsDuration", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Limit how far in the future this event can be booked",
            oneOf: [
                { $ref: (0, swagger_1.getSchemaPath)(inputs_1.BusinessDaysWindow_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(inputs_1.CalendarDaysWindow_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(inputs_1.RangeWindow_2024_06_14) },
            ],
            type: "array",
        }),
        (0, class_transformer_1.Type)(function () { return Object; }),
        __metadata("design:type", Object)
    ], BaseEventTypeOutput_2024_06_14.prototype, "bookingWindow", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return booker_layouts_input_1.BookerLayouts_2024_06_14; }),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", booker_layouts_input_1.BookerLayouts_2024_06_14)
    ], BaseEventTypeOutput_2024_06_14.prototype, "bookerLayouts", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Object)
    ], BaseEventTypeOutput_2024_06_14.prototype, "confirmationPolicy", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], BaseEventTypeOutput_2024_06_14.prototype, "requiresBookerEmailVerification", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], BaseEventTypeOutput_2024_06_14.prototype, "hideCalendarNotes", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return inputs_1.EventTypeColor_2024_06_14; }),
        (0, swagger_1.ApiPropertyOptional)({ type: inputs_1.EventTypeColor_2024_06_14 }),
        __metadata("design:type", inputs_1.EventTypeColor_2024_06_14)
    ], BaseEventTypeOutput_2024_06_14.prototype, "color", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return inputs_1.Seats_2024_06_14; }),
        (0, swagger_1.ApiPropertyOptional)({ type: inputs_1.Seats_2024_06_14 }),
        __metadata("design:type", inputs_1.Seats_2024_06_14)
    ], BaseEventTypeOutput_2024_06_14.prototype, "seats", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(1),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Number)
    ], BaseEventTypeOutput_2024_06_14.prototype, "offsetStart", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], BaseEventTypeOutput_2024_06_14.prototype, "customName", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return destination_calendar_input_1.DestinationCalendar_2024_06_14; }),
        (0, swagger_1.ApiPropertyOptional)({ type: destination_calendar_input_1.DestinationCalendar_2024_06_14 }),
        __metadata("design:type", destination_calendar_input_1.DestinationCalendar_2024_06_14)
    ], BaseEventTypeOutput_2024_06_14.prototype, "destinationCalendar", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], BaseEventTypeOutput_2024_06_14.prototype, "useDestinationCalendarEmail", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], BaseEventTypeOutput_2024_06_14.prototype, "hideCalendarEventDetails", void 0);
    BaseEventTypeOutput_2024_06_14 = __decorate([
        (0, swagger_1.ApiExtraModels)(locations_output_1.OutputAddressLocation_2024_06_14, locations_output_1.OutputLinkLocation_2024_06_14, locations_output_1.OutputIntegrationLocation_2024_06_14, locations_output_1.OutputPhoneLocation_2024_06_14, locations_output_1.OutputConferencingLocation_2024_06_14, locations_output_1.OutputUnknownLocation_2024_06_14, booking_fields_output_1.EmailDefaultFieldOutput_2024_06_14, booking_fields_output_1.NameDefaultFieldOutput_2024_06_14, booking_fields_output_1.LocationDefaultFieldOutput_2024_06_14, booking_fields_output_1.RescheduleReasonDefaultFieldOutput_2024_06_14, booking_fields_output_1.TitleDefaultFieldOutput_2024_06_14, booking_fields_output_1.NotesDefaultFieldOutput_2024_06_14, booking_fields_output_1.GuestsDefaultFieldOutput_2024_06_14, booking_fields_output_1.AddressFieldOutput_2024_06_14, booking_fields_output_1.BooleanFieldOutput_2024_06_14, booking_fields_output_1.CheckboxGroupFieldOutput_2024_06_14, booking_fields_output_1.MultiEmailFieldOutput_2024_06_14, booking_fields_output_1.MultiSelectFieldOutput_2024_06_14, booking_fields_output_1.NumberFieldOutput_2024_06_14, booking_fields_output_1.PhoneFieldOutput_2024_06_14, booking_fields_output_1.RadioGroupFieldOutput_2024_06_14, booking_fields_output_1.SelectFieldOutput_2024_06_14, booking_fields_output_1.TextAreaFieldOutput_2024_06_14, booking_fields_output_1.TextFieldOutput_2024_06_14, inputs_1.BaseBookingLimitsDuration_2024_06_14, inputs_1.BusinessDaysWindow_2024_06_14, inputs_1.CalendarDaysWindow_2024_06_14, inputs_1.RangeWindow_2024_06_14)
    ], BaseEventTypeOutput_2024_06_14);
    return BaseEventTypeOutput_2024_06_14;
}());
var TeamEventTypeResponseHost = /** @class */ (function (_super) {
    __extends(TeamEventTypeResponseHost, _super);
    function TeamEventTypeResponseHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "John Doe" }),
        __metadata("design:type", String)
    ], TeamEventTypeResponseHost.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            example: "https://cal.com/api/avatar/d95949bc-ccb1-400f-acf6-045c51a16856.png",
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], TeamEventTypeResponseHost.prototype, "avatarUrl", void 0);
    return TeamEventTypeResponseHost;
}(inputs_1.Host));
exports.TeamEventTypeResponseHost = TeamEventTypeResponseHost;
var EventTypeOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(EventTypeOutput_2024_06_14, _super);
    function EventTypeOutput_2024_06_14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, swagger_1.ApiProperty)({ example: 10 }),
        __metadata("design:type", Number)
    ], EventTypeOutput_2024_06_14.prototype, "ownerId", void 0);
    __decorate([
        (0, class_transformer_1.Type)(function () { return User_2024_06_14; }),
        (0, class_validator_1.IsArray)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Array)
    ], EventTypeOutput_2024_06_14.prototype, "users", void 0);
    return EventTypeOutput_2024_06_14;
}(BaseEventTypeOutput_2024_06_14));
exports.EventTypeOutput_2024_06_14 = EventTypeOutput_2024_06_14;
var TeamEventTypeOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(TeamEventTypeOutput_2024_06_14, _super);
    function TeamEventTypeOutput_2024_06_14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Number)
    ], TeamEventTypeOutput_2024_06_14.prototype, "teamId", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({ nullable: true }),
        __metadata("design:type", Object)
    ], TeamEventTypeOutput_2024_06_14.prototype, "ownerId", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "For managed event types, parent event type is the event type that this event type is based on",
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], TeamEventTypeOutput_2024_06_14.prototype, "parentEventTypeId", void 0);
    __decorate([
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return TeamEventTypeResponseHost; }),
        (0, class_validator_1.IsArray)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Array)
    ], TeamEventTypeOutput_2024_06_14.prototype, "hosts", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], TeamEventTypeOutput_2024_06_14.prototype, "assignAllTeamMembers", void 0);
    __decorate([
        (0, class_validator_1.IsEnum)(SchedulingTypeEnum),
        (0, swagger_1.ApiProperty)({ enum: SchedulingTypeEnum, nullable: true }),
        __metadata("design:type", Object)
    ], TeamEventTypeOutput_2024_06_14.prototype, "schedulingType", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], TeamEventTypeOutput_2024_06_14.prototype, "hideCalendarEventDetails", void 0);
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return EventTypeTeam; }),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", EventTypeTeam)
    ], TeamEventTypeOutput_2024_06_14.prototype, "team", void 0);
    return TeamEventTypeOutput_2024_06_14;
}(BaseEventTypeOutput_2024_06_14));
exports.TeamEventTypeOutput_2024_06_14 = TeamEventTypeOutput_2024_06_14;
