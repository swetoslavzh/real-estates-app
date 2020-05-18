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
var system = require('system-commands');
var configEnv = config_1.default[env];
var app = express_1.default();
var script = 'cd "C:\\Program Files\\MongoDB\\Server\\4.2\\bin" & mongod --dbpath "C:\\Users\\svetoslav.zhelyazkov\\Documents\\test4"';
database_1.default(configEnv);
express_2.default(app);
app.use(express_1.default.static('../public/dist/'));
system(script)
    .then(function (output) {
    console.log(output);
}).catch(function (error) { return console.log(error); });
app.listen(configEnv.port, function () { return console.log("Listening on port " + configEnv.port + "..."); });
//# sourceMappingURL=index.js.map