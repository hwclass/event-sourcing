"use strict";
exports.__esModule = true;
var uuid_1 = require("uuid");
var MemberId = /** @class */ (function () {
    function MemberId(id) {
        this.id = id;
    }
    MemberId.fromString = function (id) {
        return new MemberId(id);
    };
    MemberId.generateNew = function () {
        return new MemberId(uuid_1.v4());
    };
    MemberId.prototype.equals = function (that) {
        return this.id === that.id;
    };
    MemberId.prototype.toString = function () {
        return this.id;
    };
    return MemberId;
}());
exports["default"] = MemberId;
