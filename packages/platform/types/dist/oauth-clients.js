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
exports.userSchemaResponse = exports.DeleteOAuthClientInput = exports.CreateOAuthClientInput = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var zod_1 = require("zod");
var CreateOAuthClientInput = /** @class */ (function () {
    function CreateOAuthClientInput() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], CreateOAuthClientInput.prototype, "logo", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], CreateOAuthClientInput.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsString)({ each: true }),
        (0, swagger_1.ApiProperty)({ type: [String] }),
        __metadata("design:type", Array)
    ], CreateOAuthClientInput.prototype, "redirectUris", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Number)
    ], CreateOAuthClientInput.prototype, "permissions", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], CreateOAuthClientInput.prototype, "bookingRedirectUri", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], CreateOAuthClientInput.prototype, "bookingCancelRedirectUri", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], CreateOAuthClientInput.prototype, "bookingRescheduleRedirectUri", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], CreateOAuthClientInput.prototype, "areEmailsEnabled", void 0);
    return CreateOAuthClientInput;
}());
exports.CreateOAuthClientInput = CreateOAuthClientInput;
var DeleteOAuthClientInput = /** @class */ (function () {
    function DeleteOAuthClientInput() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], DeleteOAuthClientInput.prototype, "id", void 0);
    return DeleteOAuthClientInput;
}());
exports.DeleteOAuthClientInput = DeleteOAuthClientInput;
exports.userSchemaResponse = zod_1.z.object({
    id: zod_1.z.number().int(),
    email: zod_1.z.string(),
    timeFormat: zod_1.z.number().int().default(12),
    defaultScheduleId: zod_1.z.number().int().nullable(),
    weekStart: zod_1.z.string(),
    timeZone: zod_1.z.string().default("Europe/London"),
    username: zod_1.z.string(),
    organizationId: zod_1.z.number().nullable(),
    organization: zod_1.z.object({ isPlatform: zod_1.z.boolean(), id: zod_1.z.number() }).optional(),
});
