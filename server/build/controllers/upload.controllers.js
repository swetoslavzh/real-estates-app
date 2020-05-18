"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../config/config"));
var env = process.env.NODE_ENV || 'development';
var multer = require('multer');
var path = require('path');
function uploadPicture(req, res) {
    var estateId = req.params.estateId;
    var DIR = config_1.default[env].uploadDIR;
    var storage = multer.diskStorage({
        destionation: function (req, file, cb) {
            cb(null, DIR);
        },
        filename: function (req, file, cb) {
            cb(null, file.filename + path.extname(file.originalName));
        }
    });
    var upload = multer({ storage: storage });
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return res.status(422).send("an Error occured");
        }
        res.end('File is uploaded');
    });
}
exports.default = {
    uploadPicture: uploadPicture
};
//# sourceMappingURL=upload.controllers.js.map