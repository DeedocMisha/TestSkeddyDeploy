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
exports.RescheduleBookingInputPipe = void 0;
var common_1 = require("@nestjs/common");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var reschedule_booking_input_1 = require("./reschedule-booking.input");
var RescheduleBookingInputPipe = /** @class */ (function () {
    // note(Lauris): we need empty constructor otherwise v2 can't be started due to error:
    // RescheduleBookingInputPipe is not a constructor
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function RescheduleBookingInputPipe() {
    }
    RescheduleBookingInputPipe.prototype.transform = function (value) {
        if (!value) {
            throw new common_1.BadRequestException("Body is required");
        }
        if (typeof value !== "object") {
            throw new common_1.BadRequestException("Body should be an object");
        }
        if (this.isSeatedRescheduleInput(value)) {
            return this.validateSeatedReschedule(value);
        }
        return this.validateReschedule(value);
    };
    RescheduleBookingInputPipe.prototype.validateReschedule = function (value) {
        var object = (0, class_transformer_1.plainToClass)(reschedule_booking_input_1.RescheduleBookingInput_2024_08_13, value);
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
    RescheduleBookingInputPipe.prototype.validateSeatedReschedule = function (value) {
        var object = (0, class_transformer_1.plainToClass)(reschedule_booking_input_1.RescheduleSeatedBookingInput_2024_08_13, value);
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
    RescheduleBookingInputPipe.prototype.formatErrors = function (errors) {
        var _this = this;
        return errors
            .map(function (err) {
            var constraints = err.constraints ? Object.values(err.constraints).join(", ") : "";
            var childrenErrors = err.children && err.children.length > 0 ? "".concat(_this.formatErrors(err.children)) : "";
            return "".concat(err.property, " property is wrong,").concat(constraints, " ").concat(childrenErrors);
        })
            .join(", ");
    };
    RescheduleBookingInputPipe.prototype.isSeatedRescheduleInput = function (value) {
        return "seatUid" in value;
    };
    RescheduleBookingInputPipe = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [])
    ], RescheduleBookingInputPipe);
    return RescheduleBookingInputPipe;
}());
exports.RescheduleBookingInputPipe = RescheduleBookingInputPipe;
