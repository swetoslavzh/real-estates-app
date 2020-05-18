"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var encryption_1 = __importDefault(require("../../utilities/encryption"));
var userSchema = new mongoose_1.default.Schema({
    email: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        unique: true
    },
    hashedPass: {
        type: mongoose_1.default.Schema.Types.String,
        required: true
    },
    name: {
        type: mongoose_1.default.Schema.Types.String,
        required: true
    },
    salt: {
        type: mongoose_1.default.Schema.Types.String,
        required: true
    },
    roles: [{
            type: mongoose_1.default.Schema.Types.String
        }]
});
userSchema.method({
    authenticate: function (password) {
        return encryption_1.default.generateHashedPassword(this.salt, password) === this.hashedPass;
    }
});
var User = mongoose_1.default.model('User', userSchema);
exports.default = User;
//# sourceMappingURL=User.odm.js.map