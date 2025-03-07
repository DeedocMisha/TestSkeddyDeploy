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
exports.CreateRecurringBookingInput_2024_08_13 = exports.CreateInstantBookingInput_2024_08_13 = exports.CreateBookingInput_2024_08_13 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var libphonenumber_js_1 = require("libphonenumber-js");
var language_1 = require("./language");
var validate_metadata_1 = require("./validators/validate-metadata");
function RequireEmailOrPhone(validationOptions) {
    return function (target, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "requireEmailOrPhone",
            target: target.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate: function (value, args) {
                    var obj = args.object;
                    var hasPhoneNumber = !!obj.phoneNumber && obj.phoneNumber.trim().length > 0;
                    var hasEmail = !!obj.email && obj.email.trim().length > 0;
                    return hasPhoneNumber || hasEmail;
                },
                defaultMessage: function () {
                    return "At least one contact method (email or phone number) must be provided";
                },
            },
        });
    };
}
var Attendee = /** @class */ (function () {
    function Attendee() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String,
            description: "The name of the attendee.",
            example: "John Doe",
        }),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], Attendee.prototype, "name", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({
            type: String,
            description: "The email of the attendee.",
            example: "john.doe@example.com",
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.Validate)(function (value) { return !value || (0, class_validator_1.isEmail)(value); }, {
            message: "Invalid email format",
        }),
        RequireEmailOrPhone(),
        __metadata("design:type", String)
    ], Attendee.prototype, "email", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String,
            description: "The time zone of the attendee.",
            example: "America/New_York",
        }),
        (0, class_validator_1.IsTimeZone)(),
        __metadata("design:type", String)
    ], Attendee.prototype, "timeZone", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({
            type: String,
            description: "The phone number of the attendee in international format.",
            example: "+919876543210",
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.Validate)(function (value) { return !value || (0, libphonenumber_js_1.isValidPhoneNumber)(value); }, {
            message: "Invalid phone number format. Please use international format.",
        }),
        __metadata("design:type", String)
    ], Attendee.prototype, "phoneNumber", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({
            enum: language_1.BookingLanguage,
            description: "The preferred language of the attendee. Used for booking confirmation.",
            example: language_1.BookingLanguage.it,
            default: language_1.BookingLanguage.en,
        }),
        (0, class_validator_1.IsEnum)(language_1.BookingLanguage),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], Attendee.prototype, "language", void 0);
    return Attendee;
}());
var CreateBookingInput_2024_08_13 = /** @class */ (function () {
    function CreateBookingInput_2024_08_13() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String,
            description: "The start time of the booking in ISO 8601 format in UTC timezone.",
            example: "2024-08-13T09:00:00Z",
        }),
        (0, class_validator_1.IsDateString)(),
        __metadata("design:type", String)
    ], CreateBookingInput_2024_08_13.prototype, "start", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(1),
        (0, swagger_1.ApiPropertyOptional)({
            example: 30,
            description: "If it is an event type that has multiple possible lengths that attendee can pick from, you can pass the desired booking length here.\n    If not provided then event type default length will be used for the booking.",
        }),
        __metadata("design:type", Number)
    ], CreateBookingInput_2024_08_13.prototype, "lengthInMinutes", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: Number,
            description: "The ID of the event type that is booked.",
            example: 123,
        }),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], CreateBookingInput_2024_08_13.prototype, "eventTypeId", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: Attendee,
            description: "The attendee's details.",
        }),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return Attendee; }),
        __metadata("design:type", Attendee)
    ], CreateBookingInput_2024_08_13.prototype, "attendee", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({
            type: [String],
            description: "An optional list of guest emails attending the event.",
            example: ["guest1@example.com", "guest2@example.com"],
        }),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsString)({ each: true }),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], CreateBookingInput_2024_08_13.prototype, "guests", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String,
            description: "Deprecated - use 'location' instead. Meeting URL just for this booking. Displayed in email and calendar event. If not provided then cal video link will be generated.",
            example: "https://example.com/meeting",
            required: false,
            deprecated: true,
        }),
        (0, class_validator_1.IsUrl)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], CreateBookingInput_2024_08_13.prototype, "meetingUrl", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({
            type: String,
            description: "Location for this booking. Displayed in email and calendar event.",
            example: "https://example.com/meeting",
            required: false,
        }),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], CreateBookingInput_2024_08_13.prototype, "location", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: Object,
            description: "You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and string values up to 500 characters.",
            example: { key: "value" },
            required: false,
        }),
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        (0, validate_metadata_1.ValidateMetadata)({
            message: "Metadata must have at most 50 keys, each key up to 40 characters, and string values up to 500 characters.",
        }),
        __metadata("design:type", Object)
    ], CreateBookingInput_2024_08_13.prototype, "metadata", void 0);
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({
            type: Object,
            description: "Booking field responses consisting of an object with booking field slug as keys and user response as values.",
            example: { customField: "customValue" },
            required: false,
        }),
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], CreateBookingInput_2024_08_13.prototype, "bookingFieldsResponses", void 0);
    return CreateBookingInput_2024_08_13;
}());
exports.CreateBookingInput_2024_08_13 = CreateBookingInput_2024_08_13;
var CreateInstantBookingInput_2024_08_13 = /** @class */ (function (_super) {
    __extends(CreateInstantBookingInput_2024_08_13, _super);
    function CreateInstantBookingInput_2024_08_13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: Boolean,
            description: "Flag indicating if the booking is an instant booking. Only available for team events.",
            example: true,
        }),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], CreateInstantBookingInput_2024_08_13.prototype, "instant", void 0);
    return CreateInstantBookingInput_2024_08_13;
}(CreateBookingInput_2024_08_13));
exports.CreateInstantBookingInput_2024_08_13 = CreateInstantBookingInput_2024_08_13;
var CreateRecurringBookingInput_2024_08_13 = /** @class */ (function (_super) {
    __extends(CreateRecurringBookingInput_2024_08_13, _super);
    function CreateRecurringBookingInput_2024_08_13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({
            type: Number,
            description: "The number of recurrences. If not provided then event type recurrence count will be used. Can't be more than\n    event type recurrence count",
            example: 5,
            required: false,
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(1),
        __metadata("design:type", Number)
    ], CreateRecurringBookingInput_2024_08_13.prototype, "recurrenceCount", void 0);
    return CreateRecurringBookingInput_2024_08_13;
}(CreateBookingInput_2024_08_13));
exports.CreateRecurringBookingInput_2024_08_13 = CreateRecurringBookingInput_2024_08_13;
