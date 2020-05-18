import express from 'express';
import EstateODM  from '../data/models_odm/Estate.odm';
import { Estate } from '../data/models/Estate.model';

function createEstate(req: express.Request, res: express.Response): void {
  let estate: Estate = req.body;
  if (!estate) return;

  estate = fixEstateTypes(estate);

  const date = new Date();
  estate.creationDate = date;

  EstateODM.create(estate)
    .then(estate => {
      return res.status(200).json({
        success: true,
        message: 'Estate created',
        estate: estate
      })
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).json({
        success: false,
        message: err.message
      });
    });
}

function getAllEstates(req: express.Request, res: express.Response): void {
  EstateODM.find()
    .sort({ creationDate: 'descending'})
    .then(estates => {
      return res.status(200).json(estates)
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).json({
        success: false,
        message: err.message
      });
    });
}

function getEstate(req: express.Request, res: express.Response): void {
  const estateId = req.params.id;

  EstateODM.findOne({ _id: estateId })
    .then(estate => res.json(estate))
    .catch((err) => {
      console.log(err);
      return res.status(404).json({
        success: false,
        message: err.message
      });
    });
}

function deleteEstate(req: express.Request, res: express.Response): void {
  const estateId = req.params.id;
  if (!estateId) return;

  EstateODM.findOneAndDelete({ _id: estateId })
    .then((_data) => {
      return res.status(200).json({
        success: true,
        message: 'Estate was successfuly deleted'
      })
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).json({
        success: false,
        message: err.message
      });
    });
}

function updateEstate(req: express.Request, res: express.Response): void {
  const estate = req.body;
  const id = req.params.id;
  if (!estate) return;

  const date = new Date();
  estate.creationDate = date;

  EstateODM.findOneAndUpdate({ _id: id }, estate, { upsert: true })
    .then((estate) => {
      return res.status(200).json({
        success: true,
        estate: estate,
        message: 'Estate was successfuly updated'
        }) 
      })
      .catch((err) => {
        console.log(err);
        return res.status(404).json({
          success: false,
          message: err.message
        });
      });
}

function fixEstateTypes(estate: Estate): Estate {
  estate.currency = Number(estate.currency);
  estate.type = Number(estate.type);

  if (estate.condition) estate.condition = Number(estate.condition);
  if (estate.constructionType) estate.constructionType = Number(estate.constructionType);
  if (estate.estateCreationTime) estate.estateCreationTime = new Date(estate.estateCreationTime);
  if (estate.floor) estate.floor = Number(estate.floor);
  if (estate.status) estate.status = Number(estate.status);

  return estate;
}

export default {
  createEstate,
  getAllEstates,
  getEstate,
  deleteEstate,
  updateEstate
}