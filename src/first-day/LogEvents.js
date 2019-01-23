"use strict";
exports.__esModule = true;
var fs = require("fs");
var LogEvents = /** @class */ (function () {
    function LogEvents() {
    }
    LogEvents.prototype.handle = function (event) {
        this.putContentIntoFile("event.log", event.className());
    };
    LogEvents.prototype.putContentIntoFile = function (fileName, name) {
        fs.appendFile(__dirname + fileName, name + "\n", function (err) {
            if (err) {
                console.log(err);
                throw new Error("Error while writing file.");
            }
            console.log("File is appended");
        });
    };
    return LogEvents;
}());
exports["default"] = LogEvents;
