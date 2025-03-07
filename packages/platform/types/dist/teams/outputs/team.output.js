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
exports.TeamOutputDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var TeamOutputDto = /** @class */ (function () {
    function TeamOutputDto() {
        this.hideBookATeamMember = false;
        this.timeZone = "Europe/London";
        this.weekStart = "Sunday";
    }
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Number)
    ], TeamOutputDto.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Number)
    ], TeamOutputDto.prototype, "parentId", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.Length)(1),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], TeamOutputDto.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], TeamOutputDto.prototype, "slug", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsUrl)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], TeamOutputDto.prototype, "logoUrl", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsUrl)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], TeamOutputDto.prototype, "calVideoLogo", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsUrl)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], TeamOutputDto.prototype, "appLogo", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsUrl)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], TeamOutputDto.prototype, "appIconLogo", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], TeamOutputDto.prototype, "bio", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], TeamOutputDto.prototype, "hideBranding", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], TeamOutputDto.prototype, "isOrganization", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], TeamOutputDto.prototype, "isPrivate", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Boolean)
    ], TeamOutputDto.prototype, "hideBookATeamMember", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], TeamOutputDto.prototype, "metadata", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], TeamOutputDto.prototype, "theme", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], TeamOutputDto.prototype, "brandColor", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], TeamOutputDto.prototype, "darkBrandColor", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsUrl)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", String)
    ], TeamOutputDto.prototype, "bannerUrl", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)(),
        __metadata("design:type", Number)
    ], TeamOutputDto.prototype, "timeFormat", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({ type: String, default: "Europe/London" }),
        __metadata("design:type", String)
    ], TeamOutputDto.prototype, "timeZone", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({ type: String, default: "Sunday" }),
        __metadata("design:type", String)
    ], TeamOutputDto.prototype, "weekStart", void 0);
    return TeamOutputDto;
}());
exports.TeamOutputDto = TeamOutputDto;
