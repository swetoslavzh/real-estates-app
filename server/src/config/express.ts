import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import routes from './routes';
import config from './config';
const env = process.env.NODE_ENV || 'development';
const multer = require('multer');
const express = require('express');
var fs = require('fs');
const path = require('path');
 
// import { multer } from 'multer';

// const localSignupStrategy = require('../passport/local-signup');
// const localLoginStrategy = require('../passport/local-login');

export default (app: any) => {
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
  app.use(passport.initialize());
  app.use(cors({
    origin: 'http://localhost:4200'
  }));

  // FILE UPLOAD
  const DIR = config[env].uploadDIR;
  var upload = multer({ dest: './uploads' });

  app.use((req: any, res: any, next: any) => {
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
  app.use('/', routes);
}