"use strict";
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
exports.listPermissions = exports.hasProfileWritePermission = exports.hasProfileReadPermission = exports.hasAppsWritePermission = exports.hasAppsReadPermission = exports.hasScheduleWritePermission = exports.hasScheduleReadPermission = exports.hasBookingWritePermission = exports.hasBookingReadPermission = exports.hasEventTypeWritePermission = exports.hasEventTypeReadPermission = exports.hasPermissions = exports.hasPermission = void 0;
var platform_constants_1 = require("@calcom/platform-constants");
var hasPermission = function (userPermissions, permission) {
    // use bitwise AND to check if user has the permission
    return (userPermissions & permission) === permission;
};
exports.hasPermission = hasPermission;
var hasPermissions = function (userPermissions, permissions) {
    // use bitwise AND to check if each required permission is present
    return permissions.every(function (permission) { return (0, exports.hasPermission)(userPermissions, permission); });
};
exports.hasPermissions = hasPermissions;
var hasEventTypeReadPermission = function (userPermissions) {
    return (0, exports.hasPermission)(userPermissions, platform_constants_1.EVENT_TYPE_READ);
};
exports.hasEventTypeReadPermission = hasEventTypeReadPermission;
var hasEventTypeWritePermission = function (userPermissions) {
    return (0, exports.hasPermission)(userPermissions, platform_constants_1.EVENT_TYPE_WRITE);
};
exports.hasEventTypeWritePermission = hasEventTypeWritePermission;
var hasBookingReadPermission = function (userPermissions) {
    return (0, exports.hasPermission)(userPermissions, platform_constants_1.BOOKING_READ);
};
exports.hasBookingReadPermission = hasBookingReadPermission;
var hasBookingWritePermission = function (userPermissions) {
    return (0, exports.hasPermission)(userPermissions, platform_constants_1.BOOKING_WRITE);
};
exports.hasBookingWritePermission = hasBookingWritePermission;
var hasScheduleReadPermission = function (userPermissions) {
    return (0, exports.hasPermission)(userPermissions, platform_constants_1.SCHEDULE_READ);
};
exports.hasScheduleReadPermission = hasScheduleReadPermission;
var hasScheduleWritePermission = function (userPermissions) {
    return (0, exports.hasPermission)(userPermissions, platform_constants_1.SCHEDULE_WRITE);
};
exports.hasScheduleWritePermission = hasScheduleWritePermission;
var hasAppsReadPermission = function (userPermissions) {
    return (0, exports.hasPermission)(userPermissions, platform_constants_1.APPS_READ);
};
exports.hasAppsReadPermission = hasAppsReadPermission;
var hasAppsWritePermission = function (userPermissions) {
    return (0, exports.hasPermission)(userPermissions, platform_constants_1.APPS_WRITE);
};
exports.hasAppsWritePermission = hasAppsWritePermission;
var hasProfileReadPermission = function (userPermissions) {
    return (0, exports.hasPermission)(userPermissions, platform_constants_1.PROFILE_READ);
};
exports.hasProfileReadPermission = hasProfileReadPermission;
var hasProfileWritePermission = function (userPermissions) {
    return (0, exports.hasPermission)(userPermissions, platform_constants_1.PROFILE_WRITE);
};
exports.hasProfileWritePermission = hasProfileWritePermission;
var listPermissions = function (userPermissions) {
    return platform_constants_1.PERMISSIONS.reduce(function (acc, permission) {
        if ((0, exports.hasPermission)(userPermissions, permission)) {
            return __spreadArray(__spreadArray([], acc, true), [permission], false);
        }
        return acc;
    }, []);
};
exports.listPermissions = listPermissions;
