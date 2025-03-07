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
exports.GetSlotsInputPipe = void 0;
var common_1 = require("@nestjs/common");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var get_slots_input_1 = require("./get-slots.input");
var get_slots_input_2 = require("./get-slots.input");
var GetSlotsInputPipe = /** @class */ (function () {
    // note(Lauris): we need empty constructor otherwise v2 can't be started due to error:
    // CreateBookingInputPipe is not a constructor
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function GetSlotsInputPipe() {
    }
    GetSlotsInputPipe.prototype.transform = function (value) {
        if (!value) {
            throw new common_1.BadRequestException("Body is required");
        }
        if (typeof value !== "object") {
            throw new common_1.BadRequestException("Body should be an object");
        }
        if (this.isById(value)) {
            return this.validateById(value);
        }
        if (this.isBySlug(value)) {
            return this.validateBySlug(value);
        }
        return this.validateByUsernames(value);
    };
    GetSlotsInputPipe.prototype.validateById = function (value) {
        var object = (0, class_transformer_1.plainToClass)(get_slots_input_1.ById_2024_09_04, value);
        var errors = (0, class_validator_1.validateSync)(object, {
            whitelist: true,
            forbidNonWhitelisted: true,
            skipMissingProperties: false,
        });
        if (errors.length > 0) {
            throw new common_1.BadRequestException(this.formatErrors(errors));
        }
        return object;
    };
    GetSlotsInputPipe.prototype.validateBySlug = function (value) {
        var object = (0, class_transformer_1.plainToClass)(get_slots_input_1.BySlug_2024_09_04, value);
        var errors = (0, class_validator_1.validateSync)(object, {
            whitelist: true,
            forbidNonWhitelisted: true,
            skipMissingProperties: false,
        });
        if (errors.length > 0) {
            throw new common_1.BadRequestException(this.formatErrors(errors));
        }
        return object;
    };
    GetSlotsInputPipe.prototype.validateByUsernames = function (value) {
        var object = (0, class_transformer_1.plainToClass)(get_slots_input_2.ByUsernames_2024_09_04, value);
        var errors = (0, class_validator_1.validateSync)(object, {
            whitelist: true,
            forbidNonWhitelisted: true,
            skipMissingProperties: false,
        });
        if (errors.length > 0) {
            throw new common_1.BadRequestException(this.formatErrors(errors));
        }
        return object;
    };
    GetSlotsInputPipe.prototype.formatErrors = function (errors) {
        var _this = this;
        return errors
            .map(function (err) {
            var constraints = err.constraints ? Object.values(err.constraints).join(", ") : "";
            var childrenErrors = err.children && err.children.length > 0 ? "".concat(_this.formatErrors(err.children)) : "";
            return "".concat(err.property, " property is wrong,").concat(constraints, " ").concat(childrenErrors);
        })
            .join(", ");
    };
    GetSlotsInputPipe.prototype.isById = function (value) {
        return value.hasOwnProperty("eventTypeId");
    };
    GetSlotsInputPipe.prototype.isBySlug = function (value) {
        return value.hasOwnProperty("eventTypeSlug");
    };
    GetSlotsInputPipe = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [])
    ], GetSlotsInputPipe);
    return GetSlotsInputPipe;
}());
exports.GetSlotsInputPipe = GetSlotsInputPipe;
