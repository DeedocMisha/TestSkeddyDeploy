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
exports.DeclineBookingInput_2024_08_13 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var DeclineBookingInput_2024_08_13 = /** @class */ (function () {
    function DeclineBookingInput_2024_08_13() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiPropertyOptional)({
            example: "Host has to take another call",
            description: "Reason for declining a booking that requires a confirmation",
        }),
        __metadata("design:type", String)
    ], DeclineBookingInput_2024_08_13.prototype, "reason", void 0);
    return DeclineBookingInput_2024_08_13;
}());
exports.DeclineBookingInput_2024_08_13 = DeclineBookingInput_2024_08_13;
