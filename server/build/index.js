"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var env = process.env.NODE_ENV || 'development';
var config_1 = __importDefault(require("./config/config"));
var database_1 = __importDefault(require("./config/database"));
var express_1 = __importDefault(require("express"));
var express_2 = __importDefault(require("./config/express"));
var configEnv = config_1.default[env];
var app = express_1.default();
database_1.default(configEnv);
express_2.default(app);
app.listen(configEnv.port, function () { return console.log("Listening on port " + configEnv.port + "..."); });
//# sourceMappingURL=index.js.map