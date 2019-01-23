"use strict";
exports.__esModule = true;
var EventDispatcher = /** @class */ (function () {
    function EventDispatcher() {
        this.listeners = [];
    }
    EventDispatcher.prototype.addListener = function (listener) {
        this.listeners.push(listener);
    };
    EventDispatcher.prototype.dispatch = function (event) {
        this.listeners.map(function (listener) { return listener.handle(event); });
    };
    return EventDispatcher;
}());
exports["default"] = EventDispatcher;
