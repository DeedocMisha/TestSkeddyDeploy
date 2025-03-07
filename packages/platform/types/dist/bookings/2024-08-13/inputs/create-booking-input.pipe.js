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
exports.CreateBookingInputPipe = void 0;
var common_1 = require("@nestjs/common");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var create_booking_input_1 = require("./create-booking.input");
var create_booking_input_2 = require("./create-booking.input");
var create_booking_input_3 = require("./create-booking.input");
var CreateBookingInputPipe = /** @class */ (function () {
    // note(Lauris): we need empty constructor otherwise v2 can't be started due to error:
    // CreateBookingInputPipe is not a constructor
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function CreateBookingInputPipe() {
    }
    CreateBookingInputPipe.prototype.transform = function (value) {
        if (!value) {
            throw new common_1.BadRequestException("Body is required");
        }
        if (typeof value !== "object") {
            throw new common_1.BadRequestException("Body should be an object");
        }
        if (this.isRecurringBookingInput(value)) {
            return this.validateRecurringBooking(value);
        }
        if (this.isInstantBookingInput(value)) {
            return this.validateInstantBooking(value);
        }
        return this.validateBooking(value);
    };
    CreateBookingInputPipe.prototype.validateBooking = function (value) {
        var object = (0, class_transformer_1.plainToClass)(create_booking_input_2.CreateBookingInput_2024_08_13, value);
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
    CreateBookingInputPipe.prototype.validateRecurringBooking = function (value) {
        var object = (0, class_transformer_1.plainToClass)(create_booking_input_1.CreateRecurringBookingInput_2024_08_13, value);
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
    CreateBookingInputPipe.prototype.validateInstantBooking = function (value) {
        var object = (0, class_transformer_1.plainToClass)(create_booking_input_3.CreateInstantBookingInput_2024_08_13, value);
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
    CreateBookingInputPipe.prototype.formatErrors = function (errors) {
        var _this = this;
        return errors
            .map(function (err) {
            var constraints = err.constraints ? Object.values(err.constraints).join(", ") : "";
            var childrenErrors = err.children && err.children.length > 0 ? "".concat(_this.formatErrors(err.children)) : "";
            return "".concat(err.property, " property is wrong,").concat(constraints, " ").concat(childrenErrors);
        })
            .join(", ");
    };
    CreateBookingInputPipe.prototype.isRecurringBookingInput = function (value) {
        return value.hasOwnProperty("recurrenceCount");
    };
    CreateBookingInputPipe.prototype.isInstantBookingInput = function (value) {
        return value.hasOwnProperty("instant") && "instant" in value && value.instant === true;
    };
    CreateBookingInputPipe = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [])
    ], CreateBookingInputPipe);
    return CreateBookingInputPipe;
}());
exports.CreateBookingInputPipe = CreateBookingInputPipe;
