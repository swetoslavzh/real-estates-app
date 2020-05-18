"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var seed_data_service_1 = __importDefault(require("../services/seed-data.service"));
exports.default = (function (config) {
    mongoose_1.default.connect(config.path, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
    var db = mongoose_1.default.connection;
    db.once('open', function (err) {
        if (err)
            throw err;
        Promise.all([
            seed_data_service_1.default.seedAdminAndBasicUser(),
            seed_data_service_1.default.seedLocations()
        ])
            .then(function () {
            console.log('MongoDB ready!');
        }).catch(function (err) {
            console.log('Something went wrong with mongodb');
            console.error(err);
        });
    });
    db.on('error', function (err) { return console.log("Database error: " + err); });
});
//# sourceMappingURL=database.js.map