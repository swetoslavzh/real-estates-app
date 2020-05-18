"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var estateSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: Object,
        required: true
    },
    region: {
        type: Object,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    floor: {
        type: Number
    },
    currency: {
        type: Number,
        rquired: true
    },
    type: {
        type: Number,
        required: true
    },
    picturesUrls: {
        type: [String],
        default: [String]
    },
    phoneNumber: {
        type: String,
        required: true
    },
    areaSq: {
        type: Number
    },
    constructionType: {
        type: Number
    },
    condition: {
        type: Number
    },
    status: {
        type: Number
    },
    sellerName: {
        type: String
    },
    estateCreationTime: {
        type: Date
    },
    features: {
        type: [Number]
    },
    additionalInfo: {
        type: String
    },
    creationDate: {
        type: mongoose_1.default.Schema.Types.Date,
        required: true
    }
});
var estate = mongoose_1.default.model('Estate', estateSchema);
exports.default = estate;
//# sourceMappingURL=Estate.odm.js.map