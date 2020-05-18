"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Estate_odm_1 = __importDefault(require("../data/models_odm/Estate.odm"));
function createEstate(req, res) {
    var estate = req.body;
    if (!estate)
        return;
    estate = fixEstateTypes(estate);
    var date = new Date();
    estate.creationDate = date;
    Estate_odm_1.default.create(estate)
        .then(function (estate) {
        return res.status(200).json({
            success: true,
            message: 'Estate created',
            estate: estate
        });
    })
        .catch(function (err) {
        console.log(err);
        return res.status(404).json({
            success: false,
            message: err.message
        });
    });
}
function getAllEstates(req, res) {
    Estate_odm_1.default.find()
        .sort({ creationDate: 'descending' })
        .then(function (estates) {
        return res.status(200).json(estates);
    })
        .catch(function (err) {
        console.log(err);
        return res.status(404).json({
            success: false,
            message: err.message
        });
    });
}
function getEstate(req, res) {
    var estateId = req.params.id;
    Estate_odm_1.default.findOne({ _id: estateId })
        .then(function (estate) { return res.json(estate); })
        .catch(function (err) {
        console.log(err);
        return res.status(404).json({
            success: false,
            message: err.message
        });
    });
}
function deleteEstate(req, res) {
    var estateId = req.params.id;
    if (!estateId)
        return;
    Estate_odm_1.default.findOneAndDelete({ _id: estateId })
        .then(function (_data) {
        return res.status(200).json({
            success: true,
            message: 'Estate was successfuly deleted'
        });
    })
        .catch(function (err) {
        console.log(err);
        return res.status(404).json({
            success: false,
            message: err.message
        });
    });
}
function updateEstate(req, res) {
    var estate = req.body;
    var id = req.params.id;
    if (!estate)
        return;
    var date = new Date();
    estate.creationDate = date;
    Estate_odm_1.default.findOneAndUpdate({ _id: id }, estate, { upsert: true })
        .then(function (estate) {
        return res.status(200).json({
            success: true,
            estate: estate,
            message: 'Estate was successfuly updated'
        });
    })
        .catch(function (err) {
        console.log(err);
        return res.status(404).json({
            success: false,
            message: err.message
        });
    });
}
function fixEstateTypes(estate) {
    estate.currency = Number(estate.currency);
    estate.type = Number(estate.type);
    if (estate.condition)
        estate.condition = Number(estate.condition);
    if (estate.constructionType)
        estate.constructionType = Number(estate.constructionType);
    if (estate.estateCreationTime)
        estate.estateCreationTime = new Date(estate.estateCreationTime);
    if (estate.floor)
        estate.floor = Number(estate.floor);
    if (estate.status)
        estate.status = Number(estate.status);
    return estate;
}
exports.default = {
    createEstate: createEstate,
    getAllEstates: getAllEstates,
    getEstate: getEstate,
    deleteEstate: deleteEstate,
    updateEstate: updateEstate
};
//# sourceMappingURL=estate.controller.js.map