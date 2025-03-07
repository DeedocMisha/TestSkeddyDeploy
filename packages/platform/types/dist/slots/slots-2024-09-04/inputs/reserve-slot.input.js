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
exports.ReserveSlotInput_2024_09_04 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var ReserveSlotInput_2024_09_04 = /** @class */ (function () {
    function ReserveSlotInput_2024_09_04() {
    }
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, swagger_1.ApiProperty)({ example: 1, description: "The ID of the event type for which slot should be reserved." }),
        __metadata("design:type", Number)
    ], ReserveSlotInput_2024_09_04.prototype, "eventTypeId", void 0);
    __decorate([
        (0, class_validator_1.IsDateString)(),
        (0, swagger_1.ApiProperty)({
            example: "2024-09-04T09:00:00Z",
            description: "ISO 8601 datestring in UTC timezone representing available slot.",
        }),
        __metadata("design:type", String)
    ], ReserveSlotInput_2024_09_04.prototype, "slotStart", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            example: "30",
            description: "By default slot duration is equal to event type length, but if you want to reserve a slot for an event type that has a variable length you can specify it here as a number in minutes. If you don't have this set explicitly that event type can have one of many lengths you can omit this.",
        }),
        __metadata("design:type", Number)
    ], ReserveSlotInput_2024_09_04.prototype, "slotDuration", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            example: 5,
            description: "ONLY for authenticated requests with api key, access token or OAuth credentials (ID + secret).\n      \n      For how many minutes the slot should be reserved - for this long time noone else can book this event type at `start` time. If not provided, defaults to 5 minutes.",
        }),
        __metadata("design:type", Number)
    ], ReserveSlotInput_2024_09_04.prototype, "reservationDuration", void 0);
    return ReserveSlotInput_2024_09_04;
}());
exports.ReserveSlotInput_2024_09_04 = ReserveSlotInput_2024_09_04;
