"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = __importStar(require("crypto"));
exports.default = {
    generateSalt: function () {
        return crypto.randomBytes(128).toString('base64');
    },
    generateHashedPassword: function (salt, password) {
        return crypto.createHmac('sha256', salt).update(password).digest('hex');
    }
};
//# sourceMappingURL=encryption.js.map