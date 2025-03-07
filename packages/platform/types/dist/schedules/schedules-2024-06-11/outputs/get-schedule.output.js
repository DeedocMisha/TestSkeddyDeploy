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
exports.GetScheduleOutput_2024_06_11 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var platform_constants_1 = require("@calcom/platform-constants");
var schedule_output_1 = require("./schedule.output");
var GetScheduleOutput_2024_06_11 = /** @class */ (function () {
    function GetScheduleOutput_2024_06_11() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ example: platform_constants_1.SUCCESS_STATUS, enum: [platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS] }),
        (0, class_validator_1.IsEnum)([platform_constants_1.SUCCESS_STATUS, platform_constants_1.ERROR_STATUS]),
        __metadata("design:type", Object)
    ], GetScheduleOutput_2024_06_11.prototype, "status", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: schedule_output_1.ScheduleOutput_2024_06_11,
        }),
        (0, class_validator_1.IsNotEmptyObject)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return schedule_output_1.ScheduleOutput_2024_06_11; }),
        __metadata("design:type", Object)
    ], GetScheduleOutput_2024_06_11.prototype, "data", void 0);
    return GetScheduleOutput_2024_06_11;
}());
exports.GetScheduleOutput_2024_06_11 = GetScheduleOutput_2024_06_11;
