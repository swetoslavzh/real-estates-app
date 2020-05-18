import CityODM from '../data/models_odm/City.odm';
import RegionODM from '../data/models_odm/Region.odm';
import express from 'express';

function getCities(req: express.Request, res: express.Response) {
  CityODM.find({ })
    .then(( cities ) => res.json(cities));
}

function getRegions(req: express.Request, res: express.Response) {
  const cityId = req.query.cityId;

  RegionODM.find({ cityId: cityId })
    .then(regions  => res.json(regions));
}

export default {
  getCities,
  getRegions
}