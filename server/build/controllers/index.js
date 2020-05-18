"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var locations_controller_1 = __importDefault(require("./locations.controller"));
var estate_controller_1 = __importDefault(require("./estate.controller"));
var upload_controllers_1 = __importDefault(require("./upload.controllers"));
var contact_controller_1 = __importDefault(require("./contact.controller"));
exports.default = {
    locations: locations_controller_1.default,
    estate: estate_controller_1.default,
    upload: upload_controllers_1.default,
    contact: contact_controller_1.default
};
//# sourceMappingURL=index.js.map