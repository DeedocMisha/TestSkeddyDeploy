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
exports.ConfirmationPolicyValidator = exports.BaseConfirmationPolicy_2024_06_14 = exports.NoticeThreshold_2024_06_14 = void 0;
exports.ValidateConfirmationPolicy = ValidateConfirmationPolicy;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var class_validator_2 = require("class-validator");
var platform_enums_1 = require("@calcom/platform-enums");
// Class representing the notice threshold
var NoticeThreshold_2024_06_14 = /** @class */ (function () {
    function NoticeThreshold_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsEnum)(platform_enums_1.NoticeThresholdUnitEnum),
        (0, swagger_1.ApiProperty)({
            description: "The unit of time for the notice threshold (e.g., minutes, hours)",
            example: platform_enums_1.NoticeThresholdUnitEnum.MINUTES,
        }),
        __metadata("design:type", String)
    ], NoticeThreshold_2024_06_14.prototype, "unit", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, swagger_1.ApiProperty)({
            description: "The time value for the notice threshold",
            example: 30,
        }),
        __metadata("design:type", Number)
    ], NoticeThreshold_2024_06_14.prototype, "count", void 0);
    return NoticeThreshold_2024_06_14;
}());
exports.NoticeThreshold_2024_06_14 = NoticeThreshold_2024_06_14;
// Class representing the confirmation requirements
var BaseConfirmationPolicy_2024_06_14 = /** @class */ (function () {
    function BaseConfirmationPolicy_2024_06_14() {
        this.disabled = false;
    }
    __decorate([
        (0, class_validator_1.IsEnum)(platform_enums_1.ConfirmationPolicyEnum),
        (0, swagger_1.ApiProperty)({
            description: "The policy that determines when confirmation is required",
            example: platform_enums_1.ConfirmationPolicyEnum.ALWAYS,
        }),
        __metadata("design:type", String)
    ], BaseConfirmationPolicy_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return NoticeThreshold_2024_06_14; }),
        (0, swagger_1.ApiPropertyOptional)({
            description: "The notice threshold required before confirmation is needed. Required when type is 'time'.",
            type: NoticeThreshold_2024_06_14,
        }),
        __metadata("design:type", NoticeThreshold_2024_06_14)
    ], BaseConfirmationPolicy_2024_06_14.prototype, "noticeThreshold", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], BaseConfirmationPolicy_2024_06_14.prototype, "blockUnconfirmedBookingsInBooker", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], BaseConfirmationPolicy_2024_06_14.prototype, "disabled", void 0);
    return BaseConfirmationPolicy_2024_06_14;
}());
exports.BaseConfirmationPolicy_2024_06_14 = BaseConfirmationPolicy_2024_06_14;
// Validator for confirmation settings
var ConfirmationPolicyValidator = /** @class */ (function () {
    function ConfirmationPolicyValidator() {
    }
    ConfirmationPolicyValidator.prototype.validate = function (value) {
        if (value.disabled) {
            return true;
        }
        var type = value.type, noticeThreshold = value.noticeThreshold;
        if (!type)
            return false;
        if (type === platform_enums_1.ConfirmationPolicyEnum.ALWAYS) {
            return true;
        }
        if (type === platform_enums_1.ConfirmationPolicyEnum.TIME) {
            return !!(noticeThreshold &&
                typeof noticeThreshold.count === "number" &&
                typeof noticeThreshold.unit === "string");
        }
        return false;
    };
    ConfirmationPolicyValidator.prototype.defaultMessage = function () {
        return "Invalid requiresConfirmation structure. Use \"type\": \"always\" or provide a valid time and unit in \"noticeThreshold\" for \"type\": \"time\".";
    };
    ConfirmationPolicyValidator = __decorate([
        (0, class_validator_2.ValidatorConstraint)({ name: "ConfirmationPolicyValidator", async: false })
    ], ConfirmationPolicyValidator);
    return ConfirmationPolicyValidator;
}());
exports.ConfirmationPolicyValidator = ConfirmationPolicyValidator;
// Custom decorator for confirmation validation
function ValidateConfirmationPolicy(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_2.registerDecorator)({
            name: "ValidateConfirmationPolicy",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: ConfirmationPolicyValidator,
        });
    };
}
