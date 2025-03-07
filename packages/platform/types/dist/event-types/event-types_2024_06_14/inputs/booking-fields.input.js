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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanFieldInput_2024_06_14 = exports.RadioGroupFieldInput_2024_06_14 = exports.CheckboxGroupFieldInput_2024_06_14 = exports.MultiEmailFieldInput_2024_06_14 = exports.MultiSelectFieldInput_2024_06_14 = exports.SelectFieldInput_2024_06_14 = exports.TextAreaFieldInput_2024_06_14 = exports.NumberFieldInput_2024_06_14 = exports.TextFieldInput_2024_06_14 = exports.AddressFieldInput_2024_06_14 = exports.PhoneFieldInput_2024_06_14 = exports.RescheduleReasonDefaultFieldInput_2024_06_14 = exports.GuestsDefaultFieldInput_2024_06_14 = exports.NotesDefaultFieldInput_2024_06_14 = exports.TitleDefaultFieldInput_2024_06_14 = exports.EmailDefaultFieldInput_2024_06_14 = exports.SplitNameDefaultFieldInput_2024_06_14 = exports.NameDefaultFieldInput_2024_06_14 = void 0;
exports.ValidateInputBookingFields_2024_06_14 = ValidateInputBookingFields_2024_06_14;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var class_validator_2 = require("class-validator");
var inputBookingFieldTypes = [
    "name",
    "email",
    "phone",
    "address",
    "text",
    "number",
    "textarea",
    "select",
    "multiselect",
    "multiemail",
    "checkbox",
    "radio",
    "boolean",
];
var inputBookingFieldSlugs = ["name", "email", "title", "notes", "guests"];
var NameDefaultFieldInput_2024_06_14 = /** @class */ (function () {
    function NameDefaultFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldTypes),
        (0, swagger_1.ApiProperty)({
            example: "name",
            description: "only allowed value for type is `name`. Used for having 1 booking field for both first name and last name.",
        }),
        __metadata("design:type", String)
    ], NameDefaultFieldInput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], NameDefaultFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], NameDefaultFieldInput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if URL contains query parameter `&name=bob`,\
      the name field will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], NameDefaultFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    return NameDefaultFieldInput_2024_06_14;
}());
exports.NameDefaultFieldInput_2024_06_14 = NameDefaultFieldInput_2024_06_14;
var SplitNameDefaultFieldInput_2024_06_14 = /** @class */ (function () {
    function SplitNameDefaultFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldTypes),
        (0, swagger_1.ApiProperty)({
            example: "splitName",
            description: "only allowed value for type is `splitName`. Used to have 2 booking fields - 1 for first name and 1 for last name.",
        }),
        __metadata("design:type", String)
    ], SplitNameDefaultFieldInput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], SplitNameDefaultFieldInput_2024_06_14.prototype, "firstNameLabel", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], SplitNameDefaultFieldInput_2024_06_14.prototype, "firstNamePlaceholder", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], SplitNameDefaultFieldInput_2024_06_14.prototype, "lastNameLabel", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], SplitNameDefaultFieldInput_2024_06_14.prototype, "lastNamePlaceholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({ description: "First name field is required but last name field is not by default." }),
        __metadata("design:type", Boolean)
    ], SplitNameDefaultFieldInput_2024_06_14.prototype, "lastNameRequired", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if URL contains query parameter `&firstName=bob&lastName=jones`,\
      the first name and last name fields will be prefilled with this value and disabled. In case of Booker atom need to pass firstName and lastName to defaultFormValues prop or pass name prop but as a string containing name and surname.",
        }),
        __metadata("design:type", Boolean)
    ], SplitNameDefaultFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    return SplitNameDefaultFieldInput_2024_06_14;
}());
exports.SplitNameDefaultFieldInput_2024_06_14 = SplitNameDefaultFieldInput_2024_06_14;
var EmailDefaultFieldInput_2024_06_14 = /** @class */ (function () {
    function EmailDefaultFieldInput_2024_06_14() {
        this.required = true;
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldTypes),
        (0, swagger_1.ApiProperty)({
            example: "email",
            description: "only allowed value for type is `email`",
        }),
        __metadata("design:type", String)
    ], EmailDefaultFieldInput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], EmailDefaultFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Object)
    ], EmailDefaultFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], EmailDefaultFieldInput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if URL contains query parameter `&email=bob@gmail.com`,\
      the email field will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], EmailDefaultFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    return EmailDefaultFieldInput_2024_06_14;
}());
exports.EmailDefaultFieldInput_2024_06_14 = EmailDefaultFieldInput_2024_06_14;
var TitleDefaultFieldInput_2024_06_14 = /** @class */ (function () {
    function TitleDefaultFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldSlugs),
        (0, swagger_1.ApiProperty)({ example: "title", description: "only allowed value for type is `title`" }),
        __metadata("design:type", String)
    ], TitleDefaultFieldInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], TitleDefaultFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], TitleDefaultFieldInput_2024_06_14.prototype, "hidden", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], TitleDefaultFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], TitleDefaultFieldInput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if URL contains query parameter `&title=journey`,\
      the title field will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], TitleDefaultFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    return TitleDefaultFieldInput_2024_06_14;
}());
exports.TitleDefaultFieldInput_2024_06_14 = TitleDefaultFieldInput_2024_06_14;
var NotesDefaultFieldInput_2024_06_14 = /** @class */ (function () {
    function NotesDefaultFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldSlugs),
        (0, swagger_1.ApiProperty)({ example: "notes", description: "only allowed value for type is `notes`" }),
        __metadata("design:type", String)
    ], NotesDefaultFieldInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], NotesDefaultFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], NotesDefaultFieldInput_2024_06_14.prototype, "hidden", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], NotesDefaultFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], NotesDefaultFieldInput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if URL contains query parameter `&notes=journey`,\
      the notes field will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], NotesDefaultFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    return NotesDefaultFieldInput_2024_06_14;
}());
exports.NotesDefaultFieldInput_2024_06_14 = NotesDefaultFieldInput_2024_06_14;
var GuestsDefaultFieldInput_2024_06_14 = /** @class */ (function () {
    function GuestsDefaultFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldSlugs),
        (0, swagger_1.ApiProperty)({ example: "guests", description: "only allowed value for type is `guests`" }),
        __metadata("design:type", String)
    ], GuestsDefaultFieldInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], GuestsDefaultFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], GuestsDefaultFieldInput_2024_06_14.prototype, "hidden", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], GuestsDefaultFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], GuestsDefaultFieldInput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if URL contains query parameter `&guests=bob@cal.com`,\
      the guests field will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], GuestsDefaultFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    return GuestsDefaultFieldInput_2024_06_14;
}());
exports.GuestsDefaultFieldInput_2024_06_14 = GuestsDefaultFieldInput_2024_06_14;
var RescheduleReasonDefaultFieldInput_2024_06_14 = /** @class */ (function () {
    function RescheduleReasonDefaultFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldSlugs),
        (0, swagger_1.ApiProperty)({
            example: "rescheduleReason",
            description: "only allowed value for type is `rescheduleReason`",
        }),
        __metadata("design:type", String)
    ], RescheduleReasonDefaultFieldInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], RescheduleReasonDefaultFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], RescheduleReasonDefaultFieldInput_2024_06_14.prototype, "hidden", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], RescheduleReasonDefaultFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], RescheduleReasonDefaultFieldInput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if URL contains query parameter `&rescheduleReason=travel`,\
      the rescheduleReason field will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], RescheduleReasonDefaultFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    return RescheduleReasonDefaultFieldInput_2024_06_14;
}());
exports.RescheduleReasonDefaultFieldInput_2024_06_14 = RescheduleReasonDefaultFieldInput_2024_06_14;
var PhoneFieldInput_2024_06_14 = /** @class */ (function () {
    function PhoneFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldTypes),
        (0, swagger_1.ApiProperty)({ example: "phone", description: "only allowed value for type is `phone`" }),
        __metadata("design:type", String)
    ], PhoneFieldInput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            description: "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            example: "some-slug",
        }),
        __metadata("design:type", String)
    ], PhoneFieldInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], PhoneFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], PhoneFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], PhoneFieldInput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if the slug is `phone` and the URL contains query parameter `&phone=1234567890`,\
      the phone field will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], PhoneFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], PhoneFieldInput_2024_06_14.prototype, "hidden", void 0);
    return PhoneFieldInput_2024_06_14;
}());
exports.PhoneFieldInput_2024_06_14 = PhoneFieldInput_2024_06_14;
var AddressFieldInput_2024_06_14 = /** @class */ (function () {
    function AddressFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldTypes),
        (0, swagger_1.ApiProperty)({ example: "address", description: "only allowed value for type is `address`" }),
        __metadata("design:type", String)
    ], AddressFieldInput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            description: "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            example: "some-slug",
        }),
        __metadata("design:type", String)
    ], AddressFieldInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "Please enter your address" }),
        __metadata("design:type", String)
    ], AddressFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], AddressFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        (0, swagger_1.ApiProperty)({ example: "e.g., 1234 Main St" }),
        __metadata("design:type", String)
    ], AddressFieldInput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if the slug is `address` and the URL contains query parameter `&address=1234 Main St, London`,\
      the address field will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], AddressFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], AddressFieldInput_2024_06_14.prototype, "hidden", void 0);
    return AddressFieldInput_2024_06_14;
}());
exports.AddressFieldInput_2024_06_14 = AddressFieldInput_2024_06_14;
var TextFieldInput_2024_06_14 = /** @class */ (function () {
    function TextFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldTypes),
        (0, swagger_1.ApiProperty)({ example: "text", description: "only allowed value for type is `text`" }),
        __metadata("design:type", String)
    ], TextFieldInput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            description: "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            example: "some-slug",
        }),
        __metadata("design:type", String)
    ], TextFieldInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "Please enter your text" }),
        __metadata("design:type", String)
    ], TextFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], TextFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "e.g., Enter text here" }),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], TextFieldInput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if the slug is `who-referred-you` and the URL contains query parameter `&who-referred-you=bob`,\
      the text field will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], TextFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], TextFieldInput_2024_06_14.prototype, "hidden", void 0);
    return TextFieldInput_2024_06_14;
}());
exports.TextFieldInput_2024_06_14 = TextFieldInput_2024_06_14;
var NumberFieldInput_2024_06_14 = /** @class */ (function () {
    function NumberFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldTypes),
        (0, swagger_1.ApiProperty)({ example: "number", description: "only allowed value for type is `number`" }),
        __metadata("design:type", String)
    ], NumberFieldInput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            description: "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            example: "some-slug",
        }),
        __metadata("design:type", String)
    ], NumberFieldInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "Please enter a number" }),
        __metadata("design:type", String)
    ], NumberFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], NumberFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "e.g., 100" }),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], NumberFieldInput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if the slug is `calories-per-day` and the URL contains query parameter `&calories-per-day=3000`,\
      the number field will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], NumberFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], NumberFieldInput_2024_06_14.prototype, "hidden", void 0);
    return NumberFieldInput_2024_06_14;
}());
exports.NumberFieldInput_2024_06_14 = NumberFieldInput_2024_06_14;
var TextAreaFieldInput_2024_06_14 = /** @class */ (function () {
    function TextAreaFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldTypes),
        (0, swagger_1.ApiProperty)({ example: "textarea", description: "only allowed value for type is `textarea`" }),
        __metadata("design:type", String)
    ], TextAreaFieldInput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            description: "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            example: "some-slug",
        }),
        __metadata("design:type", String)
    ], TextAreaFieldInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "Please enter detailed information" }),
        __metadata("design:type", String)
    ], TextAreaFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], TextAreaFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "e.g., Detailed description here..." }),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], TextAreaFieldInput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if the slug is `dear-diary` and the URL contains query parameter `&dear-diary=Today I shipped a feature`,\
      the text area will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], TextAreaFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], TextAreaFieldInput_2024_06_14.prototype, "hidden", void 0);
    return TextAreaFieldInput_2024_06_14;
}());
exports.TextAreaFieldInput_2024_06_14 = TextAreaFieldInput_2024_06_14;
var SelectFieldInput_2024_06_14 = /** @class */ (function () {
    function SelectFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldTypes),
        (0, swagger_1.ApiProperty)({ example: "select", description: "only allowed value for type is `select`" }),
        __metadata("design:type", String)
    ], SelectFieldInput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            description: "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            example: "some-slug",
        }),
        __metadata("design:type", String)
    ], SelectFieldInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "Please select an option" }),
        __metadata("design:type", String)
    ], SelectFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], SelectFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "Select..." }),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], SelectFieldInput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, swagger_1.ApiProperty)({ type: [String], example: ["Option 1", "Option 2"] }),
        __metadata("design:type", Array)
    ], SelectFieldInput_2024_06_14.prototype, "options", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,\
      the 'italian' will be selected and the select field will be disabled.",
        }),
        __metadata("design:type", Boolean)
    ], SelectFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], SelectFieldInput_2024_06_14.prototype, "hidden", void 0);
    return SelectFieldInput_2024_06_14;
}());
exports.SelectFieldInput_2024_06_14 = SelectFieldInput_2024_06_14;
var MultiSelectFieldInput_2024_06_14 = /** @class */ (function () {
    function MultiSelectFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldTypes),
        (0, swagger_1.ApiProperty)({ example: "multiselect", description: "only allowed value for type is `multiselect`" }),
        __metadata("design:type", String)
    ], MultiSelectFieldInput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            description: "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            example: "some-slug",
        }),
        __metadata("design:type", String)
    ], MultiSelectFieldInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "Please select multiple options" }),
        __metadata("design:type", String)
    ], MultiSelectFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], MultiSelectFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, swagger_1.ApiProperty)({ type: [String], example: ["Option 1", "Option 2"] }),
        __metadata("design:type", Array)
    ], MultiSelectFieldInput_2024_06_14.prototype, "options", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=en&language=it`,\
      the 'en' and 'it' will be selected and the select field will be disabled.",
        }),
        __metadata("design:type", Boolean)
    ], MultiSelectFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], MultiSelectFieldInput_2024_06_14.prototype, "hidden", void 0);
    return MultiSelectFieldInput_2024_06_14;
}());
exports.MultiSelectFieldInput_2024_06_14 = MultiSelectFieldInput_2024_06_14;
var MultiEmailFieldInput_2024_06_14 = /** @class */ (function () {
    function MultiEmailFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldTypes),
        (0, swagger_1.ApiProperty)({ example: "multiemail", description: "only allowed value for type is `multiemail`" }),
        __metadata("design:type", String)
    ], MultiEmailFieldInput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            description: "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            example: "some-slug",
        }),
        __metadata("design:type", String)
    ], MultiEmailFieldInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "Please enter multiple emails" }),
        __metadata("design:type", String)
    ], MultiEmailFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], MultiEmailFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "e.g., example@example.com" }),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], MultiEmailFieldInput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=alice@gmail.com&consultants=bob@gmail.com`,\
      the these emails will be added and none more can be added.",
        }),
        __metadata("design:type", Boolean)
    ], MultiEmailFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], MultiEmailFieldInput_2024_06_14.prototype, "hidden", void 0);
    return MultiEmailFieldInput_2024_06_14;
}());
exports.MultiEmailFieldInput_2024_06_14 = MultiEmailFieldInput_2024_06_14;
var CheckboxGroupFieldInput_2024_06_14 = /** @class */ (function () {
    function CheckboxGroupFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldTypes),
        (0, swagger_1.ApiProperty)({ example: "checkbox", description: "only allowed value for type is `checkbox`" }),
        __metadata("design:type", String)
    ], CheckboxGroupFieldInput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            description: "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            example: "some-slug",
        }),
        __metadata("design:type", String)
    ], CheckboxGroupFieldInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "Select all that apply" }),
        __metadata("design:type", String)
    ], CheckboxGroupFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], CheckboxGroupFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, swagger_1.ApiProperty)({ type: [String], example: ["Checkbox 1", "Checkbox 2"] }),
        __metadata("design:type", Array)
    ], CheckboxGroupFieldInput_2024_06_14.prototype, "options", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if the slug is `notify-me` and the URL contains query parameter `&notify-me=true`,\
      the checkbox will be selected and the checkbox field will be disabled.",
        }),
        __metadata("design:type", Boolean)
    ], CheckboxGroupFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], CheckboxGroupFieldInput_2024_06_14.prototype, "hidden", void 0);
    return CheckboxGroupFieldInput_2024_06_14;
}());
exports.CheckboxGroupFieldInput_2024_06_14 = CheckboxGroupFieldInput_2024_06_14;
var RadioGroupFieldInput_2024_06_14 = /** @class */ (function () {
    function RadioGroupFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldTypes),
        (0, swagger_1.ApiProperty)({ example: "radio", description: "only allowed value for type is `radio`" }),
        __metadata("design:type", String)
    ], RadioGroupFieldInput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            description: "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            example: "some-slug",
        }),
        __metadata("design:type", String)
    ], RadioGroupFieldInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "Select one option" }),
        __metadata("design:type", String)
    ], RadioGroupFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], RadioGroupFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, swagger_1.ApiProperty)({ type: [String], example: ["Radio 1", "Radio 2"] }),
        __metadata("design:type", Array)
    ], RadioGroupFieldInput_2024_06_14.prototype, "options", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,\
      the 'italian' radio buttom will be selected and the select field will be disabled.",
        }),
        __metadata("design:type", Boolean)
    ], RadioGroupFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], RadioGroupFieldInput_2024_06_14.prototype, "hidden", void 0);
    return RadioGroupFieldInput_2024_06_14;
}());
exports.RadioGroupFieldInput_2024_06_14 = RadioGroupFieldInput_2024_06_14;
var BooleanFieldInput_2024_06_14 = /** @class */ (function () {
    function BooleanFieldInput_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(inputBookingFieldTypes),
        (0, swagger_1.ApiProperty)({ example: "boolean", description: "only allowed value for type is `boolean`" }),
        __metadata("design:type", String)
    ], BooleanFieldInput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            description: "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            example: "some-slug",
        }),
        __metadata("design:type", String)
    ], BooleanFieldInput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "Agree to terms?" }),
        __metadata("design:type", String)
    ], BooleanFieldInput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], BooleanFieldInput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({ type: Boolean }),
        __metadata("design:type", Boolean)
    ], BooleanFieldInput_2024_06_14.prototype, "disableOnPrefill", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], BooleanFieldInput_2024_06_14.prototype, "hidden", void 0);
    return BooleanFieldInput_2024_06_14;
}());
exports.BooleanFieldInput_2024_06_14 = BooleanFieldInput_2024_06_14;
var InputBookingFieldValidator_2024_06_14 = /** @class */ (function () {
    function InputBookingFieldValidator_2024_06_14() {
        this.classMap = {
            name: NameDefaultFieldInput_2024_06_14,
            splitName: SplitNameDefaultFieldInput_2024_06_14,
            email: EmailDefaultFieldInput_2024_06_14,
            title: TitleDefaultFieldInput_2024_06_14,
            notes: NotesDefaultFieldInput_2024_06_14,
            guests: GuestsDefaultFieldInput_2024_06_14,
            rescheduleReason: RescheduleReasonDefaultFieldInput_2024_06_14,
            phone: PhoneFieldInput_2024_06_14,
            address: AddressFieldInput_2024_06_14,
            text: TextFieldInput_2024_06_14,
            number: NumberFieldInput_2024_06_14,
            textarea: TextAreaFieldInput_2024_06_14,
            select: SelectFieldInput_2024_06_14,
            multiselect: MultiSelectFieldInput_2024_06_14,
            multiemail: MultiEmailFieldInput_2024_06_14,
            checkbox: CheckboxGroupFieldInput_2024_06_14,
            radio: RadioGroupFieldInput_2024_06_14,
            boolean: BooleanFieldInput_2024_06_14,
        };
    }
    InputBookingFieldValidator_2024_06_14.prototype.validate = function (bookingFields) {
        return __awaiter(this, void 0, void 0, function () {
            var slugs, _i, bookingFields_1, field, type, slug, fieldNeedsType, fieldNeedsSlug, ClassType, instance, errors, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Array.isArray(bookingFields)) {
                            throw new common_1.BadRequestException("'bookingFields' must be an array.");
                        }
                        if (!bookingFields.length) {
                            throw new common_1.BadRequestException("'bookingFields' must contain at least 1 booking field.");
                        }
                        slugs = [];
                        _i = 0, bookingFields_1 = bookingFields;
                        _a.label = 1;
                    case 1:
                        if (!(_i < bookingFields_1.length)) return [3 /*break*/, 4];
                        field = bookingFields_1[_i];
                        type = field.type, slug = field.slug;
                        fieldNeedsType = slug !== "title" && slug !== "notes" && slug !== "guests" && slug !== "rescheduleReason";
                        if (fieldNeedsType && !type) {
                            throw new common_1.BadRequestException("All booking fields except ones with slug equal to title, notes, guests and rescheduleReason must have a 'type' property.");
                        }
                        fieldNeedsSlug = type !== "name" && type !== "splitName" && type !== "email";
                        if (fieldNeedsSlug && !slug) {
                            throw new common_1.BadRequestException("Each booking field except ones with type equal to name and email must have a 'slug' property.");
                        }
                        if (slugs.includes(slug)) {
                            throw new common_1.BadRequestException("Duplicate bookingFields slug '".concat(slug, "' found. All bookingFields slugs must be unique."));
                        }
                        if (fieldNeedsSlug) {
                            slugs.push(slug);
                        }
                        ClassType = type ? this.classMap[type] : this.classMap[slug];
                        if (!ClassType) {
                            throw new common_1.BadRequestException(type ? "Unsupported booking field type '".concat(type, "'.") : "Unsupported booking field slug '".concat(slug, "'."));
                        }
                        instance = (0, class_transformer_1.plainToInstance)(ClassType, field);
                        return [4 /*yield*/, (0, class_validator_2.validate)(instance)];
                    case 2:
                        errors = _a.sent();
                        if (errors.length > 0) {
                            message = errors.flatMap(function (error) { return Object.values(error.constraints || {}); }).join(", ");
                            throw new common_1.BadRequestException("Validation failed for ".concat(type, " booking field: ").concat(message));
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    InputBookingFieldValidator_2024_06_14.prototype.defaultMessage = function () {
        return "Validation failed for one or more booking fields.";
    };
    InputBookingFieldValidator_2024_06_14 = __decorate([
        (0, class_validator_2.ValidatorConstraint)({ async: true })
    ], InputBookingFieldValidator_2024_06_14);
    return InputBookingFieldValidator_2024_06_14;
}());
function ValidateInputBookingFields_2024_06_14(validationOptions) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function (object, propertyName) {
        (0, class_validator_2.registerDecorator)({
            name: "ValidateInputBookingFields",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: new InputBookingFieldValidator_2024_06_14(),
        });
    };
}
function isDefaultField(field) {
    if (isDefaultNameField(field) ||
        isDefaultEmailField(field) ||
        isDefaultTitleField(field) ||
        isDefaultNotesField(field) ||
        isDefaultGuestsField(field) ||
        isDefaultRescheduleReasonField(field)) {
        return true;
    }
    return false;
}
function isDefaultNameField(field) {
    return ("type" in field && field.type === "name") || ("slug" in field && field.slug === "name");
}
function isDefaultEmailField(field) {
    return ("type" in field && field.type === "email") || ("slug" in field && field.slug === "email");
}
function isDefaultTitleField(field) {
    return "slug" in field && field.slug === "title";
}
function isDefaultNotesField(field) {
    return "slug" in field && field.slug === "notes";
}
function isDefaultGuestsField(field) {
    return "slug" in field && field.slug === "guests";
}
function isDefaultRescheduleReasonField(field) {
    return "slug" in field && field.slug === "rescheduleReason";
}
