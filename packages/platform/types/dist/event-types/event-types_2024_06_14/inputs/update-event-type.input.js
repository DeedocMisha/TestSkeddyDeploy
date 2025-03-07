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
exports.UpdateTeamEventTypeInput_2024_06_14 = exports.UpdateEventTypeInput_2024_06_14 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var booker_layouts_input_1 = require("./booker-layouts.input");
var booking_fields_input_1 = require("./booking-fields.input");
var booking_limits_count_input_1 = require("./booking-limits-count.input");
var booking_limits_duration_input_1 = require("./booking-limits-duration.input");
var booking_window_input_1 = require("./booking-window.input");
var confirmation_policy_input_1 = require("./confirmation-policy.input");
var create_event_type_input_1 = require("./create-event-type.input");
var destination_calendar_input_1 = require("./destination-calendar.input");
var disabled_input_1 = require("./disabled.input");
var event_type_color_input_1 = require("./event-type-color.input");
var locations_input_1 = require("./locations.input");
var recurrence_input_1 = require("./recurrence.input");
var seats_input_1 = require("./seats.input");
var UpdateEventTypeInput_2024_06_14 = /** @class */ (function () {
    function UpdateEventTypeInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(1),
        (0, swagger_1.ApiPropertyOptional)({ example: create_event_type_input_1.CREATE_EVENT_LENGTH_EXAMPLE }),
        __metadata("design:type", Number)
    ], UpdateEventTypeInput_2024_06_14.prototype, "lengthInMinutes", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ArrayNotEmpty)(),
        (0, class_validator_1.ArrayUnique)(),
        (0, class_validator_1.IsInt)({ each: true }),
        (0, class_validator_1.Min)(1, { each: true }),
        (0, swagger_1.ApiPropertyOptional)({
            example: [15, 30, 60],
            description: "If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.",
        }),
        __metadata("design:type", Array)
    ], UpdateEventTypeInput_2024_06_14.prototype, "lengthInMinutesOptions", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiPropertyOptional)({ example: create_event_type_input_1.CREATE_EVENT_TITLE_EXAMPLE }),
        __metadata("design:type", String)
    ], UpdateEventTypeInput_2024_06_14.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiPropertyOptional)({ example: create_event_type_input_1.CREATE_EVENT_SLUG_EXAMPLE }),
        __metadata("design:type", String)
    ], UpdateEventTypeInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiPropertyOptional)({ example: create_event_type_input_1.CREATE_EVENT_DESCRIPTION_EXAMPLE }),
        __metadata("design:type", String)
    ], UpdateEventTypeInput_2024_06_14.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, locations_input_1.ValidateLocations_2024_06_14)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Locations where the event will take place. If not provided, cal video link will be used as the location.",
            oneOf: [
                { $ref: (0, swagger_1.getSchemaPath)(locations_input_1.InputAddressLocation_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(locations_input_1.InputLinkLocation_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(locations_input_1.InputIntegrationLocation_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(locations_input_1.InputPhoneLocation_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(locations_input_1.InputAttendeeAddressLocation_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(locations_input_1.InputAttendeePhoneLocation_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(locations_input_1.InputAttendeeDefinedLocation_2024_06_14) },
            ],
            type: "array",
        }),
        (0, class_transformer_1.Type)(function () { return Object; }),
        __metadata("design:type", Array)
    ], UpdateEventTypeInput_2024_06_14.prototype, "locations", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, booking_fields_input_1.ValidateInputBookingFields_2024_06_14)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Custom fields that can be added to the booking form when the event is booked by someone. By default booking form has name and email field.",
            oneOf: [
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.NameDefaultFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.EmailDefaultFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.TitleDefaultFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.NotesDefaultFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.GuestsDefaultFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.RescheduleReasonDefaultFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.PhoneFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.AddressFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.TextFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.NumberFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.TextAreaFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.SelectFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.MultiSelectFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.MultiEmailFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.CheckboxGroupFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.RadioGroupFieldInput_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_fields_input_1.BooleanFieldInput_2024_06_14) },
            ],
            type: "array",
        }),
        (0, class_transformer_1.Type)(function () { return Object; }),
        __metadata("design:type", Array)
    ], UpdateEventTypeInput_2024_06_14.prototype, "bookingFields", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "If true, person booking this event't cant add guests via their emails.",
        }),
        __metadata("design:type", Boolean)
    ], UpdateEventTypeInput_2024_06_14.prototype, "disableGuests", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Number representing length of each slot when event is booked. By default it equal length of the event type.\n      If event length is 60 minutes then we would have slots 9AM, 10AM, 11AM etc. but if it was changed to 30 minutes then\n      we would have slots 9AM, 9:30AM, 10AM, 10:30AM etc. as the available times to book the 60 minute event.",
        }),
        __metadata("design:type", Number)
    ], UpdateEventTypeInput_2024_06_14.prototype, "slotInterval", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(0),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Minimum number of minutes before the event that a booking can be made.",
        }),
        __metadata("design:type", Number)
    ], UpdateEventTypeInput_2024_06_14.prototype, "minimumBookingNotice", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Time spaces that can be pre-pended before an event to give more time before it.",
        }),
        __metadata("design:type", Number)
    ], UpdateEventTypeInput_2024_06_14.prototype, "beforeEventBuffer", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Time spaces that can be appended after an event to give more time after it.",
        }),
        __metadata("design:type", Number)
    ], UpdateEventTypeInput_2024_06_14.prototype, "afterEventBuffer", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "If you want that this event has different schedule than user's default one you can specify it here.",
        }),
        __metadata("design:type", Number)
    ], UpdateEventTypeInput_2024_06_14.prototype, "scheduleId", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, booking_limits_count_input_1.ValidateBookingLimitsCount)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Limit how many times this event can be booked",
            oneOf: [
                { $ref: (0, swagger_1.getSchemaPath)(booking_limits_count_input_1.BaseBookingLimitsCount_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(disabled_input_1.Disabled_2024_06_14) },
            ],
        }),
        (0, class_transformer_1.Type)(function () { return Object; }),
        __metadata("design:type", Object)
    ], UpdateEventTypeInput_2024_06_14.prototype, "bookingLimitsCount", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.",
        }),
        __metadata("design:type", Boolean)
    ], UpdateEventTypeInput_2024_06_14.prototype, "onlyShowFirstAvailableSlot", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, booking_limits_duration_input_1.ValidateBookingLimistsDuration)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Limit total amount of time that this event can be booked",
            oneOf: [
                { $ref: (0, swagger_1.getSchemaPath)(booking_limits_duration_input_1.BaseBookingLimitsDuration_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(disabled_input_1.Disabled_2024_06_14) },
            ],
        }),
        (0, class_transformer_1.Type)(function () { return Object; }),
        __metadata("design:type", Object)
    ], UpdateEventTypeInput_2024_06_14.prototype, "bookingLimitsDuration", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, booking_window_input_1.ValidateBookingWindow)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Limit how far in the future this event can be booked",
            oneOf: [
                { $ref: (0, swagger_1.getSchemaPath)(booking_window_input_1.BusinessDaysWindow_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_window_input_1.CalendarDaysWindow_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(booking_window_input_1.RangeWindow_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(disabled_input_1.Disabled_2024_06_14) },
            ],
        }),
        (0, class_transformer_1.Type)(function () { return Object; }),
        __metadata("design:type", Object)
    ], UpdateEventTypeInput_2024_06_14.prototype, "bookingWindow", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(1),
        (0, swagger_1.ApiPropertyOptional)({ description: "Offset timeslots shown to bookers by a specified number of minutes" }),
        __metadata("design:type", Number)
    ], UpdateEventTypeInput_2024_06_14.prototype, "offsetStart", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Should booker have week, month or column view. Specify default layout and enabled layouts user can pick.",
        }),
        (0, class_transformer_1.Type)(function () { return booker_layouts_input_1.BookerLayouts_2024_06_14; }),
        __metadata("design:type", booker_layouts_input_1.BookerLayouts_2024_06_14)
    ], UpdateEventTypeInput_2024_06_14.prototype, "bookerLayouts", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, confirmation_policy_input_1.ValidateConfirmationPolicy)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Specify how the booking needs to be manually confirmed before it is pushed to the integrations and a confirmation mail is sent.",
            oneOf: [
                { $ref: (0, swagger_1.getSchemaPath)(confirmation_policy_input_1.BaseConfirmationPolicy_2024_06_14) },
                { $ref: (0, swagger_1.getSchemaPath)(disabled_input_1.Disabled_2024_06_14) },
            ],
        }),
        (0, class_transformer_1.Type)(function () { return Object; }),
        __metadata("design:type", Object)
    ], UpdateEventTypeInput_2024_06_14.prototype, "confirmationPolicy", void 0);
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            if (value && typeof value === "object") {
                if ("interval" in value) {
                    return Object.assign(new recurrence_input_1.Recurrence_2024_06_14(), value);
                }
                else if ("disabled" in value) {
                    return Object.assign(new disabled_input_1.Disabled_2024_06_14(), value);
                }
            }
            return value;
        }),
        (0, class_validator_1.ValidateNested)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Create a recurring event type.",
            oneOf: [{ $ref: (0, swagger_1.getSchemaPath)(recurrence_input_1.Recurrence_2024_06_14) }, { $ref: (0, swagger_1.getSchemaPath)(disabled_input_1.Disabled_2024_06_14) }],
        }),
        (0, class_transformer_1.Type)(function () { return Object; }),
        __metadata("design:type", Object)
    ], UpdateEventTypeInput_2024_06_14.prototype, "recurrence", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], UpdateEventTypeInput_2024_06_14.prototype, "requiresBookerEmailVerification", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], UpdateEventTypeInput_2024_06_14.prototype, "hideCalendarNotes", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], UpdateEventTypeInput_2024_06_14.prototype, "lockTimeZoneToggleOnBookingPage", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        (0, class_transformer_1.Type)(function () { return event_type_color_input_1.EventTypeColor_2024_06_14; }),
        __metadata("design:type", event_type_color_input_1.EventTypeColor_2024_06_14)
    ], UpdateEventTypeInput_2024_06_14.prototype, "color", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            if (value && typeof value === "object") {
                if ("seatsPerTimeSlot" in value) {
                    return Object.assign(new seats_input_1.Seats_2024_06_14(), value);
                }
                else if ("disabled" in value) {
                    return Object.assign(new disabled_input_1.Disabled_2024_06_14(), value);
                }
            }
            return value;
        }),
        (0, class_validator_1.ValidateNested)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Create an event type with multiple seats.",
            oneOf: [{ $ref: (0, swagger_1.getSchemaPath)(seats_input_1.Seats_2024_06_14) }, { $ref: (0, swagger_1.getSchemaPath)(disabled_input_1.Disabled_2024_06_14) }],
        }),
        (0, class_transformer_1.Type)(function () { return Object; }),
        __metadata("design:type", Object)
    ], UpdateEventTypeInput_2024_06_14.prototype, "seats", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Customizable event name with valid variables:\n      {Event type title}, {Organiser}, {Scheduler}, {Location}, {Organiser first name},\n      {Scheduler first name}, {Scheduler last name}, {Event duration}, {LOCATION},\n      {HOST/ATTENDEE}, {HOST}, {ATTENDEE}, {USER}",
            example: "{Event type title} between {Organiser} and {Scheduler}",
        }),
        __metadata("design:type", String)
    ], UpdateEventTypeInput_2024_06_14.prototype, "customName", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        (0, class_transformer_1.Type)(function () { return destination_calendar_input_1.DestinationCalendar_2024_06_14; }),
        __metadata("design:type", destination_calendar_input_1.DestinationCalendar_2024_06_14)
    ], UpdateEventTypeInput_2024_06_14.prototype, "destinationCalendar", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], UpdateEventTypeInput_2024_06_14.prototype, "useDestinationCalendarEmail", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], UpdateEventTypeInput_2024_06_14.prototype, "hideCalendarEventDetails", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsUrl)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "A valid URL where the booker will redirect to, once the booking is completed successfully",
            example: "https://masterchief.com/argentina/flan/video/9129412",
        }),
        __metadata("design:type", String)
    ], UpdateEventTypeInput_2024_06_14.prototype, "successRedirectUrl", void 0);
    UpdateEventTypeInput_2024_06_14 = __decorate([
        (0, swagger_1.ApiExtraModels)(locations_input_1.InputAddressLocation_2024_06_14, locations_input_1.InputLinkLocation_2024_06_14, locations_input_1.InputIntegrationLocation_2024_06_14, locations_input_1.InputPhoneLocation_2024_06_14, booking_fields_input_1.PhoneFieldInput_2024_06_14, booking_fields_input_1.AddressFieldInput_2024_06_14, booking_fields_input_1.TextFieldInput_2024_06_14, booking_fields_input_1.NumberFieldInput_2024_06_14, booking_fields_input_1.TextAreaFieldInput_2024_06_14, booking_fields_input_1.SelectFieldInput_2024_06_14, booking_fields_input_1.MultiSelectFieldInput_2024_06_14, booking_fields_input_1.MultiEmailFieldInput_2024_06_14, booking_fields_input_1.CheckboxGroupFieldInput_2024_06_14, booking_fields_input_1.RadioGroupFieldInput_2024_06_14, booking_fields_input_1.BooleanFieldInput_2024_06_14, booking_window_input_1.BusinessDaysWindow_2024_06_14, booking_window_input_1.CalendarDaysWindow_2024_06_14, booking_window_input_1.RangeWindow_2024_06_14, booking_limits_count_input_1.BaseBookingLimitsCount_2024_06_14, disabled_input_1.Disabled_2024_06_14, booking_limits_duration_input_1.BaseBookingLimitsDuration_2024_06_14, recurrence_input_1.Recurrence_2024_06_14, confirmation_policy_input_1.BaseConfirmationPolicy_2024_06_14, seats_input_1.Seats_2024_06_14, locations_input_1.InputAttendeeAddressLocation_2024_06_14, locations_input_1.InputAttendeePhoneLocation_2024_06_14, locations_input_1.InputAttendeeDefinedLocation_2024_06_14, booking_fields_input_1.NameDefaultFieldInput_2024_06_14, booking_fields_input_1.EmailDefaultFieldInput_2024_06_14, booking_fields_input_1.TitleDefaultFieldInput_2024_06_14, booking_fields_input_1.NotesDefaultFieldInput_2024_06_14, booking_fields_input_1.GuestsDefaultFieldInput_2024_06_14, booking_fields_input_1.RescheduleReasonDefaultFieldInput_2024_06_14)
    ], UpdateEventTypeInput_2024_06_14);
    return UpdateEventTypeInput_2024_06_14;
}());
exports.UpdateEventTypeInput_2024_06_14 = UpdateEventTypeInput_2024_06_14;
var UpdateTeamEventTypeInput_2024_06_14 = /** @class */ (function (_super) {
    __extends(UpdateTeamEventTypeInput_2024_06_14, _super);
    function UpdateTeamEventTypeInput_2024_06_14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return create_event_type_input_1.Host; }),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({ type: [create_event_type_input_1.Host] }),
        __metadata("design:type", Array)
    ], UpdateTeamEventTypeInput_2024_06_14.prototype, "hosts", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "If true, all current and future team members will be assigned to this event type",
        }),
        __metadata("design:type", Boolean)
    ], UpdateTeamEventTypeInput_2024_06_14.prototype, "assignAllTeamMembers", void 0);
    return UpdateTeamEventTypeInput_2024_06_14;
}(UpdateEventTypeInput_2024_06_14));
exports.UpdateTeamEventTypeInput_2024_06_14 = UpdateTeamEventTypeInput_2024_06_14;
