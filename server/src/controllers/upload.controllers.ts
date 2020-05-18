import express from 'express';
import config from '../config/config';
import { pathToFileURL } from 'url';
const env = process.env.NODE_ENV || 'development';
var multer = require('multer');
const path = require('path');

function uploadPicture(req: express.Request, res: express.Response): void {

  const estateId = req.params.estateId;
  const DIR = config[env].uploadDIR;
  const storage = multer.diskStorage({
    destionation: (req:any, file:any, cb:any) => {
      cb(null, DIR);
    },
    filename: (req: any, file: any, cb: any) => {
      cb(
        null,
        file.filename + path.extname(file.originalName)
      );
    }
  })

  const upload = multer({storage});

  upload(req, res, (err:any) => {
    if (err) {
      console.log(err);
      return res.status(422).send("an Error occured")
    }
 
    res.end('File is uploaded');
  });
}

export default {
  uploadPicture
}