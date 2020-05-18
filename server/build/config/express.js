"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var passport_1 = __importDefault(require("passport"));
var routes_1 = __importDefault(require("./routes"));
var config_1 = __importDefault(require("./config"));
var env = process.env.NODE_ENV || 'development';
var multer = require('multer');
var express = require('express');
var fs = require('fs');
var path = require('path');
// import { multer } from 'multer';
// const localSignupStrategy = require('../passport/local-signup');
// const localLoginStrategy = require('../passport/local-login');
exports.default = (function (app) {
    app.use(body_parser_1.default.urlencoded({
        extended: false
    }));
    app.use(body_parser_1.default.json());
    app.use(passport_1.default.initialize());
    app.use(cors_1.default({
        origin: 'http://localhost:4200'
    }));
    // FILE UPLOAD
    var DIR = config_1.default[env].uploadDIR;
    var upload = multer({ dest: './uploads' });
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.setHeader('Access-Control-Allow-Methods', 'POST');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
        // res.header("Access-Control-Allow-Origin", 'http://localhost:4200');
        // res.header("Access-Control-Allow-Credentials", true);
        // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        // res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
        // next();
    });
    // app.get('/upload', function (req: any, res: any) {
    //   res.end('file catcher example');
    // });
    // app.post('/upload/:estateId', upload.single('file'), (req: any, res: any, err: any) => {
    //   const estateId = req.params.estateId;
    //     if (err) {
    //       return res.end(err.toString());
    //     }
    //     res.end('File is uploaded');
    // });
    // passport.use('local-signup', localSignupStrategy);
    // passport.use('local-login', localLoginStrategy);
    // routes
    app.use('/', routes_1.default);
});
//# sourceMappingURL=express.js.map