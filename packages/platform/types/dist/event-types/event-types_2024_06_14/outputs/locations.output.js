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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputUnknownLocation_2024_06_14 = exports.OutputConferencingLocation_2024_06_14 = exports.OutputIntegrationLocation_2024_06_14 = exports.OutputAttendeeDefinedLocation_2024_06_14 = exports.OutputAttendeePhoneLocation_2024_06_14 = exports.OutputAttendeeAddressLocation_2024_06_14 = exports.OutputPhoneLocation_2024_06_14 = exports.OutputLinkLocation_2024_06_14 = exports.OutputAddressLocation_2024_06_14 = void 0;
exports.ValidateOutputLocations_2024_06_14 = ValidateOutputLocations_2024_06_14;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var class_validator_2 = require("class-validator");
var inputs_1 = require("../inputs");
var outputLocations = __spreadArray(__spreadArray([], inputs_1.inputLocations, true), ["conferencing", "unknown"], false);
var OutputAddressLocation_2024_06_14 = /** @class */ (function (_super) {
    __extends(OutputAddressLocation_2024_06_14, _super);
    function OutputAddressLocation_2024_06_14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OutputAddressLocation_2024_06_14;
}(inputs_1.InputAddressLocation_2024_06_14));
exports.OutputAddressLocation_2024_06_14 = OutputAddressLocation_2024_06_14;
var OutputLinkLocation_2024_06_14 = /** @class */ (function (_super) {
    __extends(OutputLinkLocation_2024_06_14, _super);
    function OutputLinkLocation_2024_06_14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OutputLinkLocation_2024_06_14;
}(inputs_1.InputLinkLocation_2024_06_14));
exports.OutputLinkLocation_2024_06_14 = OutputLinkLocation_2024_06_14;
var OutputPhoneLocation_2024_06_14 = /** @class */ (function (_super) {
    __extends(OutputPhoneLocation_2024_06_14, _super);
    function OutputPhoneLocation_2024_06_14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OutputPhoneLocation_2024_06_14;
}(inputs_1.InputPhoneLocation_2024_06_14));
exports.OutputPhoneLocation_2024_06_14 = OutputPhoneLocation_2024_06_14;
var OutputAttendeeAddressLocation_2024_06_14 = /** @class */ (function (_super) {
    __extends(OutputAttendeeAddressLocation_2024_06_14, _super);
    function OutputAttendeeAddressLocation_2024_06_14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OutputAttendeeAddressLocation_2024_06_14;
}(inputs_1.InputAttendeeAddressLocation_2024_06_14));
exports.OutputAttendeeAddressLocation_2024_06_14 = OutputAttendeeAddressLocation_2024_06_14;
var OutputAttendeePhoneLocation_2024_06_14 = /** @class */ (function (_super) {
    __extends(OutputAttendeePhoneLocation_2024_06_14, _super);
    function OutputAttendeePhoneLocation_2024_06_14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OutputAttendeePhoneLocation_2024_06_14;
}(inputs_1.InputAttendeePhoneLocation_2024_06_14));
exports.OutputAttendeePhoneLocation_2024_06_14 = OutputAttendeePhoneLocation_2024_06_14;
var OutputAttendeeDefinedLocation_2024_06_14 = /** @class */ (function (_super) {
    __extends(OutputAttendeeDefinedLocation_2024_06_14, _super);
    function OutputAttendeeDefinedLocation_2024_06_14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OutputAttendeeDefinedLocation_2024_06_14;
}(inputs_1.InputAttendeeDefinedLocation_2024_06_14));
exports.OutputAttendeeDefinedLocation_2024_06_14 = OutputAttendeeDefinedLocation_2024_06_14;
var integrationsValues = [
    "cal-video",
    "google-meet",
    "zoom",
    "whereby-video",
    "whatsapp-video",
    "webex-video",
    "telegram-video",
    "tandem",
    "sylaps-video",
    "skype-video",
    "sirius-video",
    "signal-video",
    "shimmer-video",
    "salesroom-video",
    "roam-video",
    "riverside-video",
    "ping-video",
    "office365-video",
    "mirotalk-video",
    "jitsi",
    "jelly-video",
    "jelly-conferencing",
    "huddle",
    "facetime-video",
    "element-call-video",
    "eightxeight-video",
    "discord-video",
    "demodesk-video",
    "campsite-conferencing",
    "campfire-video",
    "around-video",
];
var OutputIntegrationLocation_2024_06_14 = /** @class */ (function () {
    function OutputIntegrationLocation_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(outputLocations),
        (0, swagger_1.ApiProperty)({
            example: "integration",
            description: "Only allowed value for type is `integration`",
        }),
        __metadata("design:type", String)
    ], OutputIntegrationLocation_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsIn)(integrationsValues),
        (0, swagger_1.ApiProperty)({ example: integrationsValues[0], enum: integrationsValues }),
        __metadata("design:type", String)
    ], OutputIntegrationLocation_2024_06_14.prototype, "integration", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsUrl)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: String,
            example: "https://example.com",
        }),
        __metadata("design:type", String)
    ], OutputIntegrationLocation_2024_06_14.prototype, "link", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiPropertyOptional)({
            description: "Credential ID associated with the integration",
        }),
        __metadata("design:type", Number)
    ], OutputIntegrationLocation_2024_06_14.prototype, "credentialId", void 0);
    return OutputIntegrationLocation_2024_06_14;
}());
exports.OutputIntegrationLocation_2024_06_14 = OutputIntegrationLocation_2024_06_14;
var OutputConferencingLocation_2024_06_14 = /** @class */ (function () {
    function OutputConferencingLocation_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(outputLocations),
        (0, swagger_1.ApiProperty)({ example: "conferencing", description: "only allowed value for type is `conferencing`" }),
        __metadata("design:type", String)
    ], OutputConferencingLocation_2024_06_14.prototype, "type", void 0);
    return OutputConferencingLocation_2024_06_14;
}());
exports.OutputConferencingLocation_2024_06_14 = OutputConferencingLocation_2024_06_14;
var OutputUnknownLocation_2024_06_14 = /** @class */ (function () {
    function OutputUnknownLocation_2024_06_14() {
    }
    __decorate([
        (0, class_validator_1.IsIn)(outputLocations),
        (0, swagger_1.ApiProperty)({ example: "unknown", description: "only allowed value for type is `unknown`" }),
        __metadata("design:type", String)
    ], OutputUnknownLocation_2024_06_14.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], OutputUnknownLocation_2024_06_14.prototype, "location", void 0);
    return OutputUnknownLocation_2024_06_14;
}());
exports.OutputUnknownLocation_2024_06_14 = OutputUnknownLocation_2024_06_14;
var OutputLocationValidator_2024_06_14 = /** @class */ (function () {
    function OutputLocationValidator_2024_06_14() {
        this.classTypeMap = {
            address: OutputAddressLocation_2024_06_14,
            link: OutputLinkLocation_2024_06_14,
            integration: OutputIntegrationLocation_2024_06_14,
            phone: OutputPhoneLocation_2024_06_14,
            attendeePhone: OutputAttendeePhoneLocation_2024_06_14,
            attendeeAddress: OutputAttendeeAddressLocation_2024_06_14,
            attendeeDefined: OutputAttendeeDefinedLocation_2024_06_14,
            conferencing: OutputConferencingLocation_2024_06_14,
            unknown: OutputUnknownLocation_2024_06_14,
        };
    }
    OutputLocationValidator_2024_06_14.prototype.validate = function (locations) {
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
                            throw new common_1.BadRequestException("Unsupported output type '".concat(type, "'."));
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
    OutputLocationValidator_2024_06_14.prototype.defaultMessage = function () {
        return "Validation failed for one or more location entries.";
    };
    OutputLocationValidator_2024_06_14 = __decorate([
        (0, class_validator_2.ValidatorConstraint)({ async: true })
    ], OutputLocationValidator_2024_06_14);
    return OutputLocationValidator_2024_06_14;
}());
function ValidateOutputLocations_2024_06_14(validationOptions) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function (object, propertyName) {
        (0, class_validator_2.registerDecorator)({
            name: "ValidateLocation",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: new OutputLocationValidator_2024_06_14(),
        });
    };
}
