"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var City_odm_1 = __importDefault(require("../data/models_odm/City.odm"));
var Region_odm_1 = __importDefault(require("../data/models_odm/Region.odm"));
function getCities(req, res) {
    City_odm_1.default.find({})
        .then(function (cities) { return res.json(cities); });
}
function getRegions(req, res) {
    var cityId = req.query.cityId;
    Region_odm_1.default.find({ cityId: cityId })
        .then(function (regions) { return res.json(regions); });
}
exports.default = {
    getCities: getCities,
    getRegions: getRegions
};
//# sourceMappingURL=locations.controller.js.map