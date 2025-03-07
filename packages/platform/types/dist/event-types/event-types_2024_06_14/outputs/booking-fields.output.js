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
exports.OutputUnknownBookingField_2024_06_14 = exports.BooleanFieldOutput_2024_06_14 = exports.RadioGroupFieldOutput_2024_06_14 = exports.CheckboxGroupFieldOutput_2024_06_14 = exports.MultiEmailFieldOutput_2024_06_14 = exports.MultiSelectFieldOutput_2024_06_14 = exports.SelectFieldOutput_2024_06_14 = exports.TextAreaFieldOutput_2024_06_14 = exports.NumberFieldOutput_2024_06_14 = exports.TextFieldOutput_2024_06_14 = exports.AddressFieldOutput_2024_06_14 = exports.PhoneFieldOutput_2024_06_14 = exports.PhoneDefaultFieldOutput_2024_06_14 = exports.GuestsDefaultFieldOutput_2024_06_14 = exports.NotesDefaultFieldOutput_2024_06_14 = exports.TitleDefaultFieldOutput_2024_06_14 = exports.RescheduleReasonDefaultFieldOutput_2024_06_14 = exports.LocationDefaultFieldOutput_2024_06_14 = exports.EmailDefaultFieldOutput_2024_06_14 = exports.SplitNameDefaultFieldOutput_2024_06_14 = exports.NameDefaultFieldOutput_2024_06_14 = void 0;
exports.ValidateOutputBookingFields_2024_06_14 = ValidateOutputBookingFields_2024_06_14;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var class_validator_2 = require("class-validator");
var inputs_1 = require("../inputs");
var NameDefaultFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(NameDefaultFieldOutput_2024_06_14, _super);
    function NameDefaultFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = true;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always true because it's a default field",
            example: true,
            default: true,
        }),
        __metadata("design:type", Object)
    ], NameDefaultFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "name",
        }),
        __metadata("design:type", String)
    ], NameDefaultFieldOutput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "name",
        }),
        __metadata("design:type", String)
    ], NameDefaultFieldOutput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], NameDefaultFieldOutput_2024_06_14.prototype, "required", void 0);
    return NameDefaultFieldOutput_2024_06_14;
}(inputs_1.NameDefaultFieldInput_2024_06_14));
exports.NameDefaultFieldOutput_2024_06_14 = NameDefaultFieldOutput_2024_06_14;
var SplitNameDefaultFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(SplitNameDefaultFieldOutput_2024_06_14, _super);
    function SplitNameDefaultFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = true;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always true because it's a default field",
            example: true,
            default: true,
        }),
        __metadata("design:type", Object)
    ], SplitNameDefaultFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "splitName",
        }),
        __metadata("design:type", String)
    ], SplitNameDefaultFieldOutput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "splitName",
        }),
        __metadata("design:type", String)
    ], SplitNameDefaultFieldOutput_2024_06_14.prototype, "type", void 0);
    return SplitNameDefaultFieldOutput_2024_06_14;
}(inputs_1.SplitNameDefaultFieldInput_2024_06_14));
exports.SplitNameDefaultFieldOutput_2024_06_14 = SplitNameDefaultFieldOutput_2024_06_14;
var EmailDefaultFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(EmailDefaultFieldOutput_2024_06_14, _super);
    function EmailDefaultFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = true;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always true because it's a default field",
            example: true,
            default: true,
        }),
        __metadata("design:type", Object)
    ], EmailDefaultFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "email",
        }),
        __metadata("design:type", String)
    ], EmailDefaultFieldOutput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "email",
        }),
        __metadata("design:type", String)
    ], EmailDefaultFieldOutput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], EmailDefaultFieldOutput_2024_06_14.prototype, "required", void 0);
    return EmailDefaultFieldOutput_2024_06_14;
}(inputs_1.EmailDefaultFieldInput_2024_06_14));
exports.EmailDefaultFieldOutput_2024_06_14 = EmailDefaultFieldOutput_2024_06_14;
var LocationDefaultFieldOutput_2024_06_14 = /** @class */ (function () {
    function LocationDefaultFieldOutput_2024_06_14() {
        this.isDefault = true;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always true because it's a default field",
            example: true,
            default: true,
        }),
        __metadata("design:type", Object)
    ], LocationDefaultFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "location",
            description: "This booking field is returned only if the event type has more than one location. The purpose of this field is to allow the user to select the location where the event will take place.",
        }),
        __metadata("design:type", String)
    ], LocationDefaultFieldOutput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "radioInput",
        }),
        __metadata("design:type", String)
    ], LocationDefaultFieldOutput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], LocationDefaultFieldOutput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], LocationDefaultFieldOutput_2024_06_14.prototype, "hidden", void 0);
    return LocationDefaultFieldOutput_2024_06_14;
}());
exports.LocationDefaultFieldOutput_2024_06_14 = LocationDefaultFieldOutput_2024_06_14;
var RescheduleReasonDefaultFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(RescheduleReasonDefaultFieldOutput_2024_06_14, _super);
    function RescheduleReasonDefaultFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = true;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always true because it's a default field",
            example: true,
            default: true,
        }),
        __metadata("design:type", Object)
    ], RescheduleReasonDefaultFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "rescheduleReason",
        }),
        __metadata("design:type", String)
    ], RescheduleReasonDefaultFieldOutput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "textarea",
        }),
        __metadata("design:type", String)
    ], RescheduleReasonDefaultFieldOutput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], RescheduleReasonDefaultFieldOutput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], RescheduleReasonDefaultFieldOutput_2024_06_14.prototype, "hidden", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], RescheduleReasonDefaultFieldOutput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], RescheduleReasonDefaultFieldOutput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if URL contains query parameter `&rescheduleReason=busy`,\
      the reschedule reason field will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], RescheduleReasonDefaultFieldOutput_2024_06_14.prototype, "disableOnPrefill", void 0);
    return RescheduleReasonDefaultFieldOutput_2024_06_14;
}(inputs_1.RescheduleReasonDefaultFieldInput_2024_06_14));
exports.RescheduleReasonDefaultFieldOutput_2024_06_14 = RescheduleReasonDefaultFieldOutput_2024_06_14;
var TitleDefaultFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(TitleDefaultFieldOutput_2024_06_14, _super);
    function TitleDefaultFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = true;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always true because it's a default field",
            example: true,
            default: true,
        }),
        __metadata("design:type", Object)
    ], TitleDefaultFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "title",
        }),
        __metadata("design:type", String)
    ], TitleDefaultFieldOutput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "text",
        }),
        __metadata("design:type", String)
    ], TitleDefaultFieldOutput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], TitleDefaultFieldOutput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], TitleDefaultFieldOutput_2024_06_14.prototype, "hidden", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], TitleDefaultFieldOutput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], TitleDefaultFieldOutput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if URL contains query parameter `&title=masterclass`,\
      the title field will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], TitleDefaultFieldOutput_2024_06_14.prototype, "disableOnPrefill", void 0);
    return TitleDefaultFieldOutput_2024_06_14;
}(inputs_1.TitleDefaultFieldInput_2024_06_14));
exports.TitleDefaultFieldOutput_2024_06_14 = TitleDefaultFieldOutput_2024_06_14;
var NotesDefaultFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(NotesDefaultFieldOutput_2024_06_14, _super);
    function NotesDefaultFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = true;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always true because it's a default field",
            example: true,
            default: true,
        }),
        __metadata("design:type", Object)
    ], NotesDefaultFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "notes",
        }),
        __metadata("design:type", String)
    ], NotesDefaultFieldOutput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "textarea",
        }),
        __metadata("design:type", String)
    ], NotesDefaultFieldOutput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], NotesDefaultFieldOutput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], NotesDefaultFieldOutput_2024_06_14.prototype, "hidden", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], NotesDefaultFieldOutput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], NotesDefaultFieldOutput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if URL contains query parameter `&notes=hello`,\
      the notes field will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], NotesDefaultFieldOutput_2024_06_14.prototype, "disableOnPrefill", void 0);
    return NotesDefaultFieldOutput_2024_06_14;
}(inputs_1.NotesDefaultFieldInput_2024_06_14));
exports.NotesDefaultFieldOutput_2024_06_14 = NotesDefaultFieldOutput_2024_06_14;
var GuestsDefaultFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(GuestsDefaultFieldOutput_2024_06_14, _super);
    function GuestsDefaultFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = true;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always true because it's a default field",
            example: true,
            default: true,
        }),
        __metadata("design:type", Object)
    ], GuestsDefaultFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "guests",
        }),
        __metadata("design:type", String)
    ], GuestsDefaultFieldOutput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "multiemail",
        }),
        __metadata("design:type", String)
    ], GuestsDefaultFieldOutput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], GuestsDefaultFieldOutput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], GuestsDefaultFieldOutput_2024_06_14.prototype, "hidden", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], GuestsDefaultFieldOutput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], GuestsDefaultFieldOutput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if URL contains query parameter `&guests=lauris@cal.com`,\
      the guests field will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], GuestsDefaultFieldOutput_2024_06_14.prototype, "disableOnPrefill", void 0);
    return GuestsDefaultFieldOutput_2024_06_14;
}(inputs_1.GuestsDefaultFieldInput_2024_06_14));
exports.GuestsDefaultFieldOutput_2024_06_14 = GuestsDefaultFieldOutput_2024_06_14;
var PhoneDefaultFieldOutput_2024_06_14 = /** @class */ (function () {
    function PhoneDefaultFieldOutput_2024_06_14() {
        this.isDefault = true;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always true because it's a default field",
            example: true,
            default: true,
        }),
        __metadata("design:type", Object)
    ], PhoneDefaultFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "attendeePhoneNumber",
        }),
        __metadata("design:type", String)
    ], PhoneDefaultFieldOutput_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            default: "phone",
        }),
        __metadata("design:type", String)
    ], PhoneDefaultFieldOutput_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], PhoneDefaultFieldOutput_2024_06_14.prototype, "required", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], PhoneDefaultFieldOutput_2024_06_14.prototype, "hidden", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], PhoneDefaultFieldOutput_2024_06_14.prototype, "label", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], PhoneDefaultFieldOutput_2024_06_14.prototype, "placeholder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            type: Boolean,
            description: "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.\
      For example, if URL contains query parameter `&attendeePhoneNumber=+37122222222`,\
      the guests field will be prefilled with this value and disabled.",
        }),
        __metadata("design:type", Boolean)
    ], PhoneDefaultFieldOutput_2024_06_14.prototype, "disableOnPrefill", void 0);
    return PhoneDefaultFieldOutput_2024_06_14;
}());
exports.PhoneDefaultFieldOutput_2024_06_14 = PhoneDefaultFieldOutput_2024_06_14;
var PhoneFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(PhoneFieldOutput_2024_06_14, _super);
    function PhoneFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = false;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always false because it's not default field but custom field",
            example: false,
            default: false,
        }),
        __metadata("design:type", Object)
    ], PhoneFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], PhoneFieldOutput_2024_06_14.prototype, "hidden", void 0);
    return PhoneFieldOutput_2024_06_14;
}(inputs_1.PhoneFieldInput_2024_06_14));
exports.PhoneFieldOutput_2024_06_14 = PhoneFieldOutput_2024_06_14;
var AddressFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(AddressFieldOutput_2024_06_14, _super);
    function AddressFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = false;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always false because it's not default field but custom field",
            example: false,
            default: false,
        }),
        __metadata("design:type", Object)
    ], AddressFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], AddressFieldOutput_2024_06_14.prototype, "hidden", void 0);
    return AddressFieldOutput_2024_06_14;
}(inputs_1.AddressFieldInput_2024_06_14));
exports.AddressFieldOutput_2024_06_14 = AddressFieldOutput_2024_06_14;
var TextFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(TextFieldOutput_2024_06_14, _super);
    function TextFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = false;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always false because it's not default field but custom field",
            example: false,
            default: false,
        }),
        __metadata("design:type", Object)
    ], TextFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], TextFieldOutput_2024_06_14.prototype, "hidden", void 0);
    return TextFieldOutput_2024_06_14;
}(inputs_1.TextFieldInput_2024_06_14));
exports.TextFieldOutput_2024_06_14 = TextFieldOutput_2024_06_14;
var NumberFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(NumberFieldOutput_2024_06_14, _super);
    function NumberFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = false;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always false because it's not default field but custom field",
            example: false,
            default: false,
        }),
        __metadata("design:type", Object)
    ], NumberFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], NumberFieldOutput_2024_06_14.prototype, "hidden", void 0);
    return NumberFieldOutput_2024_06_14;
}(inputs_1.NumberFieldInput_2024_06_14));
exports.NumberFieldOutput_2024_06_14 = NumberFieldOutput_2024_06_14;
var TextAreaFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(TextAreaFieldOutput_2024_06_14, _super);
    function TextAreaFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = false;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always false because it's not default field but custom field",
            example: false,
            default: false,
        }),
        __metadata("design:type", Object)
    ], TextAreaFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], TextAreaFieldOutput_2024_06_14.prototype, "hidden", void 0);
    return TextAreaFieldOutput_2024_06_14;
}(inputs_1.TextAreaFieldInput_2024_06_14));
exports.TextAreaFieldOutput_2024_06_14 = TextAreaFieldOutput_2024_06_14;
var SelectFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(SelectFieldOutput_2024_06_14, _super);
    function SelectFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = false;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always false because it's not default field but custom field",
            example: false,
            default: false,
        }),
        __metadata("design:type", Object)
    ], SelectFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], SelectFieldOutput_2024_06_14.prototype, "hidden", void 0);
    return SelectFieldOutput_2024_06_14;
}(inputs_1.SelectFieldInput_2024_06_14));
exports.SelectFieldOutput_2024_06_14 = SelectFieldOutput_2024_06_14;
var MultiSelectFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(MultiSelectFieldOutput_2024_06_14, _super);
    function MultiSelectFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = false;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always false because it's not default field but custom field",
            example: false,
            default: false,
        }),
        __metadata("design:type", Object)
    ], MultiSelectFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], MultiSelectFieldOutput_2024_06_14.prototype, "hidden", void 0);
    return MultiSelectFieldOutput_2024_06_14;
}(inputs_1.MultiSelectFieldInput_2024_06_14));
exports.MultiSelectFieldOutput_2024_06_14 = MultiSelectFieldOutput_2024_06_14;
var MultiEmailFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(MultiEmailFieldOutput_2024_06_14, _super);
    function MultiEmailFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = false;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always false because it's not default field but custom field",
            example: false,
            default: false,
        }),
        __metadata("design:type", Object)
    ], MultiEmailFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], MultiEmailFieldOutput_2024_06_14.prototype, "hidden", void 0);
    return MultiEmailFieldOutput_2024_06_14;
}(inputs_1.MultiEmailFieldInput_2024_06_14));
exports.MultiEmailFieldOutput_2024_06_14 = MultiEmailFieldOutput_2024_06_14;
var CheckboxGroupFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(CheckboxGroupFieldOutput_2024_06_14, _super);
    function CheckboxGroupFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = false;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always false because it's not default field but custom field",
            example: false,
            default: false,
        }),
        __metadata("design:type", Object)
    ], CheckboxGroupFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], CheckboxGroupFieldOutput_2024_06_14.prototype, "hidden", void 0);
    return CheckboxGroupFieldOutput_2024_06_14;
}(inputs_1.CheckboxGroupFieldInput_2024_06_14));
exports.CheckboxGroupFieldOutput_2024_06_14 = CheckboxGroupFieldOutput_2024_06_14;
var RadioGroupFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(RadioGroupFieldOutput_2024_06_14, _super);
    function RadioGroupFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = false;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always false because it's not default field but custom field",
            example: false,
            default: false,
        }),
        __metadata("design:type", Object)
    ], RadioGroupFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], RadioGroupFieldOutput_2024_06_14.prototype, "hidden", void 0);
    return RadioGroupFieldOutput_2024_06_14;
}(inputs_1.RadioGroupFieldInput_2024_06_14));
exports.RadioGroupFieldOutput_2024_06_14 = RadioGroupFieldOutput_2024_06_14;
var BooleanFieldOutput_2024_06_14 = /** @class */ (function (_super) {
    __extends(BooleanFieldOutput_2024_06_14, _super);
    function BooleanFieldOutput_2024_06_14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefault = false;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "This property is always false because it's not default field but custom field",
            example: false,
            default: false,
        }),
        __metadata("design:type", Object)
    ], BooleanFieldOutput_2024_06_14.prototype, "isDefault", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({
            description: "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
        }),
        __metadata("design:type", Boolean)
    ], BooleanFieldOutput_2024_06_14.prototype, "hidden", void 0);
    return BooleanFieldOutput_2024_06_14;
}(inputs_1.BooleanFieldInput_2024_06_14));
exports.BooleanFieldOutput_2024_06_14 = BooleanFieldOutput_2024_06_14;
var OutputUnknownBookingField_2024_06_14 = /** @class */ (function () {
    function OutputUnknownBookingField_2024_06_14() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "unknown", description: "only allowed value for type is `unknown`" }),
        __metadata("design:type", String)
    ], OutputUnknownBookingField_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "unknown", description: "only allowed value for type is `unknown`" }),
        __metadata("design:type", String)
    ], OutputUnknownBookingField_2024_06_14.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], OutputUnknownBookingField_2024_06_14.prototype, "bookingField", void 0);
    return OutputUnknownBookingField_2024_06_14;
}());
exports.OutputUnknownBookingField_2024_06_14 = OutputUnknownBookingField_2024_06_14;
var OutputBookingFieldValidator_2024_06_14 = /** @class */ (function () {
    function OutputBookingFieldValidator_2024_06_14() {
        this.logger = new common_1.Logger("OutputBookingFieldValidator_2024_06_14");
        this.defaultOutputNameMap = {
            name: NameDefaultFieldOutput_2024_06_14,
            splitName: SplitNameDefaultFieldOutput_2024_06_14,
            email: EmailDefaultFieldOutput_2024_06_14,
            location: LocationDefaultFieldOutput_2024_06_14,
            rescheduleReason: RescheduleReasonDefaultFieldOutput_2024_06_14,
            title: TitleDefaultFieldOutput_2024_06_14,
            notes: NotesDefaultFieldOutput_2024_06_14,
            guests: GuestsDefaultFieldOutput_2024_06_14,
            attendeePhoneNumber: PhoneDefaultFieldOutput_2024_06_14,
        };
        this.customOutputTypeMap = {
            phone: PhoneFieldOutput_2024_06_14,
            address: AddressFieldOutput_2024_06_14,
            text: TextFieldOutput_2024_06_14,
            number: NumberFieldOutput_2024_06_14,
            textarea: TextAreaFieldOutput_2024_06_14,
            select: SelectFieldOutput_2024_06_14,
            multiselect: MultiSelectFieldOutput_2024_06_14,
            multiemail: MultiEmailFieldOutput_2024_06_14,
            checkbox: CheckboxGroupFieldOutput_2024_06_14,
            radio: RadioGroupFieldOutput_2024_06_14,
            boolean: BooleanFieldOutput_2024_06_14,
        };
    }
    OutputBookingFieldValidator_2024_06_14.prototype.validate = function (bookingFields) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, bookingFields_1, field;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, bookingFields_1 = bookingFields;
                        _a.label = 1;
                    case 1:
                        if (!(_i < bookingFields_1.length)) return [3 /*break*/, 8];
                        field = bookingFields_1[_i];
                        if (!this.isUnknownField(field)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.validateUnknownField(field)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 3:
                        if (!this.isDefaultField(field)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.validateDefaultField(field)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.validateCustomField(field)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 1];
                    case 8: return [2 /*return*/, true];
                }
            });
        });
    };
    OutputBookingFieldValidator_2024_06_14.prototype.isDefaultField = function (field) {
        return field.type !== "unknown" && "isDefault" in field && field.isDefault === true;
    };
    OutputBookingFieldValidator_2024_06_14.prototype.isUnknownField = function (field) {
        return field.type === "unknown";
    };
    OutputBookingFieldValidator_2024_06_14.prototype.validateUnknownField = function (field) {
        return __awaiter(this, void 0, void 0, function () {
            var instance, errors, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        instance = (0, class_transformer_1.plainToInstance)(OutputUnknownBookingField_2024_06_14, field);
                        return [4 /*yield*/, (0, class_validator_2.validate)(instance)];
                    case 1:
                        errors = _a.sent();
                        if (errors.length > 0) {
                            message = errors.flatMap(function (error) { return Object.values(error.constraints || {}); }).join(", ");
                            this.logger.error("OutputBookingFieldValidator_2024_06_14: Validation failed for unknown booking field: ".concat(message));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    OutputBookingFieldValidator_2024_06_14.prototype.validateDefaultField = function (field) {
        return __awaiter(this, void 0, void 0, function () {
            var ClassType, instance, errors, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ClassType = this.defaultOutputNameMap[field.slug];
                        if (!ClassType) {
                            this.logger.error("OutputBookingFieldValidator_2024_06_14: Unsupported default booking field slug '".concat(field.slug, "'."));
                        }
                        instance = (0, class_transformer_1.plainToInstance)(ClassType, field);
                        return [4 /*yield*/, (0, class_validator_2.validate)(instance)];
                    case 1:
                        errors = _a.sent();
                        if (errors.length > 0) {
                            message = errors.flatMap(function (error) { return Object.values(error.constraints || {}); }).join(", ");
                            this.logger.error("OutputBookingFieldValidator_2024_06_14: Validation failed for ".concat(field.slug, " booking field: ").concat(message));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    OutputBookingFieldValidator_2024_06_14.prototype.validateCustomField = function (field) {
        return __awaiter(this, void 0, void 0, function () {
            var ClassType, instance, errors, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ClassType = this.customOutputTypeMap[field.type];
                        if (!ClassType) {
                            this.logger.error("OutputBookingFieldValidator_2024_06_14: Unsupported custom booking field type '".concat(field.type, "'."));
                        }
                        instance = (0, class_transformer_1.plainToInstance)(ClassType, field);
                        return [4 /*yield*/, (0, class_validator_2.validate)(instance)];
                    case 1:
                        errors = _a.sent();
                        if (errors.length > 0) {
                            message = errors.flatMap(function (error) { return Object.values(error.constraints || {}); }).join(", ");
                            this.logger.error("OutputBookingFieldValidator_2024_06_14: Validation failed for ".concat(field.type, " booking field: ").concat(message));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    OutputBookingFieldValidator_2024_06_14.prototype.defaultMessage = function () {
        return "Validation failed for one or more booking fields.";
    };
    OutputBookingFieldValidator_2024_06_14 = __decorate([
        (0, class_validator_2.ValidatorConstraint)({ async: true })
    ], OutputBookingFieldValidator_2024_06_14);
    return OutputBookingFieldValidator_2024_06_14;
}());
function ValidateOutputBookingFields_2024_06_14(validationOptions) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function (object, propertyName) {
        (0, class_validator_2.registerDecorator)({
            name: "ValidateOutputBookingFields",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: new OutputBookingFieldValidator_2024_06_14(),
        });
    };
}
