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
exports.EventTypeColor_2024_06_14 = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
// Class representing the event type colors
var EventTypeColor_2024_06_14 = /** @class */ (function () {
    function EventTypeColor_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsHexColor)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            description: "Color used for event types in light theme",
            example: "#292929",
        }),
        __metadata("design:type", String)
    ], EventTypeColor_2024_06_14.prototype, "lightThemeHex", void 0);
    __decorate([
        (0, class_validator_1.IsHexColor)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({
            description: "Color used for event types in dark theme",
            example: "#fafafa",
        }),
        __metadata("design:type", String)
    ], EventTypeColor_2024_06_14.prototype, "darkThemeHex", void 0);
    return EventTypeColor_2024_06_14;
}());
exports.EventTypeColor_2024_06_14 = EventTypeColor_2024_06_14;
