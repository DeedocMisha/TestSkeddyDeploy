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
exports.ApiResponseWithoutData = exports.SkipTakePagination = exports.Pagination = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var class_validator_2 = require("class-validator");
var platform_constants_1 = require("@calcom/platform-constants");
var Pagination = /** @class */ (function () {
    function Pagination() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false, description: "The number of items to return", example: 10 }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value && parseInt(value);
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(1),
        (0, class_validator_1.Max)(250),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], Pagination.prototype, "limit", void 0);
    __decorate([
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value && parseInt(value);
        }),
        (0, swagger_1.ApiProperty)({ required: false, description: "The number of items to skip", example: 0 }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(0),
        (0, class_validator_1.Max)(250),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], Pagination.prototype, "offset", void 0);
    return Pagination;
}());
exports.Pagination = Pagination;
var SkipTakePagination = /** @class */ (function () {
    function SkipTakePagination() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false, description: "The number of items to return", example: 10 }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value && parseInt(value);
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(1),
        (0, class_validator_1.Max)(250),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], SkipTakePagination.prototype, "take", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ required: false, description: "The number of items to skip", example: 0 }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value && parseInt(value);
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(0),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], SkipTakePagination.prototype, "skip", void 0);
    return SkipTakePagination;
}());
exports.SkipTakePagination = SkipTakePagination;
var ApiResponseWithoutData = /** @class */ (function () {
    function ApiResponseWithoutData() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ example: platform_constants_1.SUCCESS_STATUS, enum: [platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS] }),
        (0, class_validator_2.IsEnum)([platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS]),
        __metadata("design:type", Object)
    ], ApiResponseWithoutData.prototype, "status", void 0);
    return ApiResponseWithoutData;
}());
exports.ApiResponseWithoutData = ApiResponseWithoutData;
