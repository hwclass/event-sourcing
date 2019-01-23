"use strict";
exports.__esModule = true;
var MemberRegistered = /** @class */ (function () {
    function MemberRegistered(id, name, email, registredAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.registeredAt = registredAt;
    }
    MemberRegistered.prototype.getId = function () {
        return this.id;
    };
    MemberRegistered.prototype.getMemberName = function () {
        return this.name;
    };
    MemberRegistered.prototype.getEmail = function () {
        return this.email;
    };
    MemberRegistered.prototype.getRegisteredAt = function () {
        return this.registeredAt;
    };
    MemberRegistered.prototype.className = function () {
        return "MemberRegistered";
    };
    return MemberRegistered;
}());
exports["default"] = MemberRegistered;
