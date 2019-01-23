"use strict";
exports.__esModule = true;
var moment = require("moment");
var Timestamp = /** @class */ (function () {
    function Timestamp(timestamp) {
        if (timestamp === "" && !Timestamp.isValid(timestamp)) {
            throw Error("Invalid timestamp");
        }
        this.timestamp = moment(timestamp, Timestamp.format).format(Timestamp.format);
    }
    Timestamp.isValid = function (timestamp) {
        return moment(timestamp, Timestamp.format, true).isValid();
    };
    Timestamp.prototype.toString = function () {
        return moment(this.timestamp).format(Timestamp.format);
    };
    Timestamp.fromString = function (timestamp) {
        return new Timestamp(timestamp);
    };
    Timestamp.fromNow = function () {
        return new Timestamp(moment().format(Timestamp.format));
    };
    Timestamp.prototype.equals = function (that) {
        return that.timestamp === this.timestamp;
    };
    Timestamp.prototype.isBefore = function (that) {
        return moment(this.timestamp).isBefore(that.timestamp);
    };
    Timestamp.prototype.isAfter = function (that) {
        return moment(this.timestamp).isAfter(that.timestamp);
    };
    Timestamp.format = "YYYY-MM-DD HH:mm:ss";
    return Timestamp;
}());
exports["default"] = Timestamp;
