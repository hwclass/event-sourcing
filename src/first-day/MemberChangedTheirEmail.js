"use strict";
exports.__esModule = true;
var MemberChangedTheirEmail = /** @class */ (function () {
    function MemberChangedTheirEmail(id, name, oldEmail, newEmail, changedAt) {
        this.id = id;
        this.name = name;
        this.oldEmail = oldEmail;
        this.newEmail = newEmail;
        this.changedAt = changedAt;
    }
    MemberChangedTheirEmail.prototype.getId = function () {
        return this.id;
    };
    MemberChangedTheirEmail.prototype.getName = function () {
        return this.name;
    };
    MemberChangedTheirEmail.prototype.getOldEmail = function () {
        return this.oldEmail;
    };
    MemberChangedTheirEmail.prototype.getNewEmail = function () {
        return this.newEmail;
    };
    MemberChangedTheirEmail.prototype.getChangedAt = function () {
        return this.changedAt;
    };
    MemberChangedTheirEmail.prototype.className = function () {
        return "MemberChangedTheirEmail";
    };
    return MemberChangedTheirEmail;
}());
exports["default"] = MemberChangedTheirEmail;
