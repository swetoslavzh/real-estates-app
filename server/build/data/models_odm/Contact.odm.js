"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var contactSchema = new mongoose_1.default.Schema({
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    city: {
        type: Object,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    region: {
        type: Object,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    additionalInfo: {
        type: String
    },
    creationDate: {
        type: mongoose_1.default.Schema.Types.Date,
        required: true
    }
});
var contact = mongoose_1.default.model('Contact', contactSchema);
exports.default = contact;
//# sourceMappingURL=Contact.odm.js.map