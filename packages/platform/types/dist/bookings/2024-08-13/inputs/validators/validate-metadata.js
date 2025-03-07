"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateMetadata = ValidateMetadata;
var class_validator_1 = require("class-validator");
function ValidateMetadata(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "ValidateMetadata",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate: function (metadata) {
                    if (typeof metadata !== "object" || metadata === null) {
                        return false;
                    }
                    var keys = Object.keys(metadata);
                    if (keys.length > 50) {
                        return false;
                    }
                    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                        var key = keys_1[_i];
                        if (key.length > 40) {
                            return false;
                        }
                        if (isInvalidValidKeyValue(metadata[key])) {
                            return false;
                        }
                    }
                    return true;
                },
                defaultMessage: function (args) {
                    return "".concat(args.property, " must be an object with up to 50 keys, each key name up to 40 characters, and values with a maximum length of 500 characters.");
                },
            },
        });
    };
}
function isInvalidValidKeyValue(keyValue) {
    if (!isString(keyValue)) {
        return true;
    }
    if (isTooLong(keyValue)) {
        return true;
    }
    return false;
}
function isString(keyValue) {
    return typeof keyValue === "string";
}
function isTooLong(keyValue) {
    return keyValue.length > 500;
}
