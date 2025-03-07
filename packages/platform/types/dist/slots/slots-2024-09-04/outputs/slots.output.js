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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeSlotsOutput_2024_09_04 = exports.SeatedRangeSlot_2024_09_04 = exports.RangeSlot_2024_09_04 = exports.SlotsOutput_2024_09_04 = exports.SeatedSlot_2024_09_04 = exports.Slot_2024_09_04 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var Slot_2024_09_04 = /** @class */ (function () {
    function Slot_2024_09_04() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Start time of slot." }),
        (0, class_validator_1.IsDateString)(),
        __metadata("design:type", String)
    ], Slot_2024_09_04.prototype, "start", void 0);
    return Slot_2024_09_04;
}());
exports.Slot_2024_09_04 = Slot_2024_09_04;
var SeatedSlot_2024_09_04 = /** @class */ (function (_super) {
    __extends(SeatedSlot_2024_09_04, _super);
    function SeatedSlot_2024_09_04() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "How many attendees are attending seated event at this slot." }),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], SeatedSlot_2024_09_04.prototype, "seatsBooked", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "How many seats are remaining at this slot." }),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], SeatedSlot_2024_09_04.prototype, "seatsRemaining", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Total number of seats for the event type" }),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], SeatedSlot_2024_09_04.prototype, "seatsTotal", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Unique identifier of the booking of the seated event." }),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], SeatedSlot_2024_09_04.prototype, "bookingUid", void 0);
    return SeatedSlot_2024_09_04;
}(Slot_2024_09_04));
exports.SeatedSlot_2024_09_04 = SeatedSlot_2024_09_04;
var SlotsOutput_2024_09_04 = /** @class */ (function () {
    function SlotsOutput_2024_09_04() {
    }
    return SlotsOutput_2024_09_04;
}());
exports.SlotsOutput_2024_09_04 = SlotsOutput_2024_09_04;
var RangeSlot_2024_09_04 = /** @class */ (function (_super) {
    __extends(RangeSlot_2024_09_04, _super);
    function RangeSlot_2024_09_04() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "End time of slot." }),
        (0, class_validator_1.IsDateString)(),
        __metadata("design:type", String)
    ], RangeSlot_2024_09_04.prototype, "end", void 0);
    return RangeSlot_2024_09_04;
}(Slot_2024_09_04));
exports.RangeSlot_2024_09_04 = RangeSlot_2024_09_04;
var SeatedRangeSlot_2024_09_04 = /** @class */ (function (_super) {
    __extends(SeatedRangeSlot_2024_09_04, _super);
    function SeatedRangeSlot_2024_09_04() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "How many attendees are attending seated event at this slot." }),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], SeatedRangeSlot_2024_09_04.prototype, "seatsBooked", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "How many seats are remaining at this slot." }),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], SeatedRangeSlot_2024_09_04.prototype, "seatsRemaining", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Total number of seats for the event type" }),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], SeatedRangeSlot_2024_09_04.prototype, "seatsTotal", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Unique identifier of the booking of the seated event." }),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], SeatedRangeSlot_2024_09_04.prototype, "bookingUid", void 0);
    return SeatedRangeSlot_2024_09_04;
}(RangeSlot_2024_09_04));
exports.SeatedRangeSlot_2024_09_04 = SeatedRangeSlot_2024_09_04;
var RangeSlotsOutput_2024_09_04 = /** @class */ (function () {
    function RangeSlotsOutput_2024_09_04() {
    }
    return RangeSlotsOutput_2024_09_04;
}());
exports.RangeSlotsOutput_2024_09_04 = RangeSlotsOutput_2024_09_04;
