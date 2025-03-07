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
exports.ReserveSlotOutput_2024_09_04 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var ReserveSlotOutput_2024_09_04 = /** @class */ (function () {
    function ReserveSlotOutput_2024_09_04() {
    }
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, swagger_1.ApiProperty)({ example: 1, description: "The ID of the event type for which slot was reserved." }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Number)
    ], ReserveSlotOutput_2024_09_04.prototype, "eventTypeId", void 0);
    __decorate([
        (0, class_validator_1.IsDateString)(),
        (0, swagger_1.ApiProperty)({
            example: "2024-09-04T09:00:00Z",
            description: "ISO 8601 datestring in UTC timezone representing available slot.",
        }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], ReserveSlotOutput_2024_09_04.prototype, "slotStart", void 0);
    __decorate([
        (0, class_validator_1.IsDateString)(),
        (0, swagger_1.ApiProperty)({
            example: "2024-09-04T10:00:00Z",
            description: "ISO 8601 datestring in UTC timezone representing slot end.",
        }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], ReserveSlotOutput_2024_09_04.prototype, "slotEnd", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, swagger_1.ApiProperty)({
            example: "30",
            description: "By default slot duration is equal to event type length, but if you want to reserve a slot for an event type that has a variable length you can specify it here. If you don't have this set explicitly that event type can have one of many lengths you can omit this.",
        }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Number)
    ], ReserveSlotOutput_2024_09_04.prototype, "slotDuration", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            example: "e84be5a3-4696-49e3-acc7-b2f3999c3b94",
            description: "The unique identifier of the reservation. Use it to update, get or delete the reservation.",
        }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], ReserveSlotOutput_2024_09_04.prototype, "reservationUid", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, swagger_1.ApiProperty)({
            example: 5,
            description: "For how many minutes the slot is reserved - for this long time noone else can book this event type at `start` time.",
        }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Number)
    ], ReserveSlotOutput_2024_09_04.prototype, "reservationDuration", void 0);
    __decorate([
        (0, class_validator_1.IsDateString)(),
        (0, swagger_1.ApiProperty)({
            example: "2023-09-04T10:00:00Z",
            description: "ISO 8601 datestring in UTC timezone representing time until which the slot is reserved.",
        }),
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], ReserveSlotOutput_2024_09_04.prototype, "reservationUntil", void 0);
    return ReserveSlotOutput_2024_09_04;
}());
exports.ReserveSlotOutput_2024_09_04 = ReserveSlotOutput_2024_09_04;
