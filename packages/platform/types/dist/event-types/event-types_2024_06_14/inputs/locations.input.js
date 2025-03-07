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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputAttendeeDefinedLocation_2024_06_14 = exports.InputAttendeePhoneLocation_2024_06_14 = exports.InputAttendeeAddressLocation_2024_06_14 = exports.InputPhoneLocation_2024_06_14 = exports.InputIntegrationLocation_2024_06_14 = exports.supportedIntegrations = exports.InputLinkLocation_2024_06_14 = exports.InputAddressLocation_2024_06_14 = exports.inputLocations = void 0;
exports.ValidateLocations_2024_06_14 = ValidateLocations_2024_06_14;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var class_validator_2 = require("class-validator");
exports.inputLocations = [
    "address",
    "link",
    "integration",
    "phone",
    "attendeeAddress",
    "attendeePhone",
    "attendeeDefined",
];
var InputAddressLocation_2024_06_14 = /** @class */ (function () {
    function InputAddressLocation_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(exports.inputLocations),
        (0, swagger_1.ApiProperty)({ example: "address", description: "only allowed value for type is `address`" }),
        __metadata("design:type", String)
    ], InputAddressLocation_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: "123 Example St, City, Country" }),
        __metadata("design:type", String)
    ], InputAddressLocation_2024_06_14.prototype, "address", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], InputAddressLocation_2024_06_14.prototype, "public", void 0);
    return InputAddressLocation_2024_06_14;
}());
exports.InputAddressLocation_2024_06_14 = InputAddressLocation_2024_06_14;
var InputLinkLocation_2024_06_14 = /** @class */ (function () {
    function InputLinkLocation_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(exports.inputLocations),
        (0, swagger_1.ApiProperty)({ example: "link", description: "only allowed value for type is `link`" }),
        __metadata("design:type", String)
    ], InputLinkLocation_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsUrl)(),
        (0, swagger_1.ApiProperty)({ example: "https://customvideo.com/join/123456" }),
        __metadata("design:type", String)
    ], InputLinkLocation_2024_06_14.prototype, "link", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], InputLinkLocation_2024_06_14.prototype, "public", void 0);
    return InputLinkLocation_2024_06_14;
}());
exports.InputLinkLocation_2024_06_14 = InputLinkLocation_2024_06_14;
exports.supportedIntegrations = ["cal-video", "google-meet"];
var InputIntegrationLocation_2024_06_14 = /** @class */ (function () {
    function InputIntegrationLocation_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(exports.inputLocations),
        (0, swagger_1.ApiProperty)({ example: "integration", description: "only allowed value for type is `integration`" }),
        __metadata("design:type", String)
    ], InputIntegrationLocation_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsIn)(exports.supportedIntegrations),
        (0, swagger_1.ApiProperty)({ example: exports.supportedIntegrations[0], enum: exports.supportedIntegrations }),
        __metadata("design:type", String)
    ], InputIntegrationLocation_2024_06_14.prototype, "integration", void 0);
    return InputIntegrationLocation_2024_06_14;
}());
exports.InputIntegrationLocation_2024_06_14 = InputIntegrationLocation_2024_06_14;
var InputPhoneLocation_2024_06_14 = /** @class */ (function () {
    function InputPhoneLocation_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(exports.inputLocations),
        (0, swagger_1.ApiProperty)({ example: "phone", description: "only allowed value for type is `phone`" }),
        __metadata("design:type", String)
    ], InputPhoneLocation_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsPhoneNumber)(),
        (0, swagger_1.ApiProperty)({ example: "+37120993151" }),
        __metadata("design:type", String)
    ], InputPhoneLocation_2024_06_14.prototype, "phone", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Boolean)
    ], InputPhoneLocation_2024_06_14.prototype, "public", void 0);
    return InputPhoneLocation_2024_06_14;
}());
exports.InputPhoneLocation_2024_06_14 = InputPhoneLocation_2024_06_14;
var InputAttendeeAddressLocation_2024_06_14 = /** @class */ (function () {
    function InputAttendeeAddressLocation_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(exports.inputLocations),
        (0, swagger_1.ApiProperty)({
            example: "attendeeAddress",
            description: "only allowed value for type is `attendeeAddress`",
        }),
        __metadata("design:type", String)
    ], InputAttendeeAddressLocation_2024_06_14.prototype, "type", void 0);
    return InputAttendeeAddressLocation_2024_06_14;
}());
exports.InputAttendeeAddressLocation_2024_06_14 = InputAttendeeAddressLocation_2024_06_14;
var InputAttendeePhoneLocation_2024_06_14 = /** @class */ (function () {
    function InputAttendeePhoneLocation_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(exports.inputLocations),
        (0, swagger_1.ApiProperty)({ example: "attendeePhone", description: "only allowed value for type is `attendeePhone`" }),
        __metadata("design:type", String)
    ], InputAttendeePhoneLocation_2024_06_14.prototype, "type", void 0);
    return InputAttendeePhoneLocation_2024_06_14;
}());
exports.InputAttendeePhoneLocation_2024_06_14 = InputAttendeePhoneLocation_2024_06_14;
var InputAttendeeDefinedLocation_2024_06_14 = /** @class */ (function () {
    function InputAttendeeDefinedLocation_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(exports.inputLocations),
        (0, swagger_1.ApiProperty)({
            example: "attendeeDefined",
            description: "only allowed value for type is `attendeeDefined`",
        }),
        __metadata("design:type", String)
    ], InputAttendeeDefinedLocation_2024_06_14.prototype, "type", void 0);
    return InputAttendeeDefinedLocation_2024_06_14;
}());
exports.InputAttendeeDefinedLocation_2024_06_14 = InputAttendeeDefinedLocation_2024_06_14;
var InputLocationValidator_2024_06_14 = /** @class */ (function () {
    function InputLocationValidator_2024_06_14() {
        this.classTypeMap = {
            address: InputAddressLocation_2024_06_14,
            link: InputLinkLocation_2024_06_14,
            integration: InputIntegrationLocation_2024_06_14,
            phone: InputPhoneLocation_2024_06_14,
            attendeePhone: InputAttendeePhoneLocation_2024_06_14,
            attendeeAddress: InputAttendeeAddressLocation_2024_06_14,
            attendeeDefined: InputAttendeeDefinedLocation_2024_06_14,
        };
    }
    InputLocationValidator_2024_06_14.prototype.validate = function (locations) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, locations_1, location_1, type, ClassType, instance, errors, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Array.isArray(locations)) {
                            throw new common_1.BadRequestException("'locations' must be an array.");
                        }
                        if (!locations.length) {
                            throw new common_1.BadRequestException("'locations' must contain at least 1 location.");
                        }
                        _i = 0, locations_1 = locations;
                        _a.label = 1;
                    case 1:
                        if (!(_i < locations_1.length)) return [3 /*break*/, 4];
                        location_1 = locations_1[_i];
                        type = location_1.type;
                        if (!type) {
                            throw new common_1.BadRequestException("Each object in 'locations' must have a 'type' property.");
                        }
                        ClassType = this.classTypeMap[type];
                        if (!ClassType) {
                            throw new common_1.BadRequestException("Unsupported location type '".concat(type, "'. Valid types are address, link, integration, and phone."));
                        }
                        instance = (0, class_transformer_1.plainToInstance)(ClassType, location_1);
                        return [4 /*yield*/, (0, class_validator_2.validate)(instance)];
                    case 2:
                        errors = _a.sent();
                        if (errors.length > 0) {
                            message = errors.flatMap(function (error) { return Object.values(error.constraints || {}); }).join(", ");
                            throw new common_1.BadRequestException("Validation failed for ".concat(type, " location: ").concat(message));
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    InputLocationValidator_2024_06_14.prototype.defaultMessage = function () {
        return "Validation failed for one or more location entries.";
    };
    InputLocationValidator_2024_06_14 = __decorate([
        (0, class_validator_2.ValidatorConstraint)({ async: true })
    ], InputLocationValidator_2024_06_14);
    return InputLocationValidator_2024_06_14;
}());
function ValidateLocations_2024_06_14(validationOptions) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function (object, propertyName) {
        (0, class_validator_2.registerDecorator)({
            name: "ValidateLocation",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: new InputLocationValidator_2024_06_14(),
        });
    };
}
