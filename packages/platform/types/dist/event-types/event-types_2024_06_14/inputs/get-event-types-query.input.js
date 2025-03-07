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
exports.GetTeamEventTypesQuery_2024_06_14 = exports.GetEventTypesQuery_2024_06_14 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var GetEventTypesQuery_2024_06_14 = /** @class */ (function () {
    function GetEventTypesQuery_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "The username of the user to get event types for. If only username provided will get all event types.",
        }),
        __metadata("design:type", String)
    ], GetEventTypesQuery_2024_06_14.prototype, "username", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Slug of event type to return. Notably, if eventSlug is provided then username must be provided too, because multiple users can have event with same slug.",
        }),
        __metadata("design:type", String)
    ], GetEventTypesQuery_2024_06_14.prototype, "eventSlug", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        TransformUsernames(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Get dynamic event type for multiple usernames separated by comma. e.g `usernames=alice,bob`",
            type: String,
        }),
        __metadata("design:type", Array)
    ], GetEventTypesQuery_2024_06_14.prototype, "usernames", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "slug of the user's organization if he is in one, orgId is not required if using this parameter",
            type: String,
        }),
        __metadata("design:type", String)
    ], GetEventTypesQuery_2024_06_14.prototype, "orgSlug", void 0);
    __decorate([
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return Number(value);
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "ID of the organization of the user you want the get the event-types of, orgSlug is not needed when using this parameter",
            type: Number,
        }),
        __metadata("design:type", Number)
    ], GetEventTypesQuery_2024_06_14.prototype, "orgId", void 0);
    return GetEventTypesQuery_2024_06_14;
}());
exports.GetEventTypesQuery_2024_06_14 = GetEventTypesQuery_2024_06_14;
var GetTeamEventTypesQuery_2024_06_14 = /** @class */ (function () {
    function GetTeamEventTypesQuery_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Slug of team event type to return.",
        }),
        __metadata("design:type", String)
    ], GetTeamEventTypesQuery_2024_06_14.prototype, "eventSlug", void 0);
    __decorate([
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return Number(value);
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Specifies the maximum number of hosts to include in the response. This limit helps optimize performance. If not provided, all Hosts will be fetched.",
        }),
        __metadata("design:type", Number)
    ], GetTeamEventTypesQuery_2024_06_14.prototype, "hostsLimit", void 0);
    return GetTeamEventTypesQuery_2024_06_14;
}());
exports.GetTeamEventTypesQuery_2024_06_14 = GetTeamEventTypesQuery_2024_06_14;
function TransformUsernames() {
    return (0, class_transformer_1.Transform)(function (_a) {
        var value = _a.value;
        if (typeof value === "string") {
            return value.split(",").map(function (username) { return username.trim(); });
        }
        return value;
    });
}
