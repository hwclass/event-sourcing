"use strict";
exports.__esModule = true;
var v4_1 = require("uuid/v4");
var OrderId = /** @class */ (function () {
    function OrderId(id) {
        this.id = id;
    }
    OrderId.fromString = function (id) {
        return new OrderId(id);
    };
    OrderId.generateNew = function () {
        return new OrderId(v4_1["default"]());
    };
    OrderId.prototype.equals = function (that) {
        return this.id === that.id;
    };
    OrderId.prototype.toString = function () {
        return this.id;
    };
    return OrderId;
}());
