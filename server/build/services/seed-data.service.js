"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var encryption_1 = __importDefault(require("../utilities/encryption"));
var User_odm_1 = __importDefault(require("../data/models_odm/User.odm"));
var City_odm_1 = __importDefault(require("../data/models_odm/City.odm"));
var Region_odm_1 = __importDefault(require("../data/models_odm/Region.odm"));
function seedAdminAndBasicUser() {
    return __awaiter(this, void 0, void 0, function () {
        var users, saltAdmin, hashedPassAdmin, saltUser, hashedPassUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User_odm_1.default.find()];
                case 1:
                    users = _a.sent();
                    if (users.length > 0)
                        return [2 /*return*/];
                    saltAdmin = encryption_1.default.generateSalt();
                    hashedPassAdmin = encryption_1.default.generateHashedPassword(saltAdmin, 'Admin');
                    User_odm_1.default.create({
                        name: 'Admin',
                        email: 'admin@admin.com',
                        salt: saltAdmin,
                        hashedPass: hashedPassAdmin,
                        roles: ['Admin']
                    });
                    saltUser = encryption_1.default.generateSalt();
                    hashedPassUser = encryption_1.default.generateHashedPassword(saltUser, 'test123');
                    User_odm_1.default.create({
                        name: 'Svetoslav',
                        email: 'swetoslavj@gmail.com',
                        salt: saltUser,
                        hashedPass: hashedPassUser,
                        roles: []
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
function seedLocations() {
    return __awaiter(this, void 0, void 0, function () {
        var cities, citiesFromFSJSON, citiesArr, _i, citiesArr_1, city, regions, regionsFromFSJSON, regionsArr, _a, regionsArr_1, region;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, City_odm_1.default.find()];
                case 1:
                    cities = _b.sent();
                    if (cities.length === 0) {
                        citiesFromFSJSON = fs_1.default.readFileSync(path_1.default.join(__dirname, '../../data/cities.json'));
                        if (citiesFromFSJSON.length === 0)
                            throw new Error('cities.json not found');
                        citiesArr = JSON.parse(citiesFromFSJSON.toString());
                        for (_i = 0, citiesArr_1 = citiesArr; _i < citiesArr_1.length; _i++) {
                            city = citiesArr_1[_i];
                            City_odm_1.default.create({
                                id: city.id,
                                name: city.name
                            });
                        }
                    }
                    return [4 /*yield*/, Region_odm_1.default.find()];
                case 2:
                    regions = _b.sent();
                    if (regions.length > 0)
                        return [2 /*return*/];
                    regionsFromFSJSON = fs_1.default.readFileSync(path_1.default.join(__dirname, '../../data/regions.json'));
                    if (regionsFromFSJSON.length === 0)
                        throw new Error('regions.json not found');
                    regionsArr = JSON.parse(regionsFromFSJSON.toString());
                    for (_a = 0, regionsArr_1 = regionsArr; _a < regionsArr_1.length; _a++) {
                        region = regionsArr_1[_a];
                        Region_odm_1.default.create({
                            id: region.id,
                            name: region.name,
                            cityId: region.cityId
                        });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = {
    seedAdminAndBasicUser: seedAdminAndBasicUser,
    seedLocations: seedLocations
};
//# sourceMappingURL=seed-data.service.js.map