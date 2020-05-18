"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var citySchema = new mongoose_1.default.Schema({
    id: {
        type: mongoose_1.default.Schema.Types.Number,
        required: true,
        unique: true
    },
    name: {
        type: mongoose_1.default.Schema.Types.String,
        required: true
    }
});
var city = mongoose_1.default.model('City', citySchema);
exports.default = city;
//# sourceMappingURL=City.odm.js.map