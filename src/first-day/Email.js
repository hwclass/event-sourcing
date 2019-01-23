"use strict";
exports.__esModule = true;
var Email = /** @class */ (function () {
    function Email(email) {
        // check if valid or not -> regex
        if (this.isValid(email)) {
            throw new Error("Please enter a valid email");
        }
        this.email = email;
    }
    Email.prototype.isValid = function (email) {
        // return true if it is valid
        if (!/\S+@\S+\.\S+/.test(email)) {
            return true;
        }
        return false;
    };
    Email.prototype.toString = function () {
        return this.email.toString();
    };
    return Email;
}());
exports["default"] = Email;
