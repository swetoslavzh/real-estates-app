import fs from 'fs';
import path from 'path';
import encryption from '../utilities/encryption';
import UserODM from '../data/models_odm/User.odm';
import CityODM from '../data/models_odm/City.odm';
import RegionODM from '../data/models_odm/Region.odm';
import { City } from '../data/models/city.model';
import { Region } from '../data/models/region.model';

async function seedAdminAndBasicUser() {
  const users = await UserODM.find();
  if (users.length > 0) return;

  const saltAdmin = encryption.generateSalt();
  const hashedPassAdmin = encryption.generateHashedPassword(saltAdmin, 'Admin');
  UserODM.create({
    name: 'Admin',
    email: 'admin@admin.com',
    salt: saltAdmin,
    hashedPass: hashedPassAdmin,
    roles: ['Admin']
  });

  const saltUser = encryption.generateSalt();
  const hashedPassUser = encryption.generateHashedPassword(saltUser, 'test123');
  UserODM.create({
    name: 'Svetoslav',
    email: 'swetoslavj@gmail.com',
    salt: saltUser,
    hashedPass: hashedPassUser,
    roles: []
  });
};

async function seedLocations() {
  const cities = await CityODM.find();
  if (cities.length === 0) {
    const citiesFromFSJSON = fs.readFileSync(path.join(__dirname, '../../data/cities.json'));
    if (citiesFromFSJSON.length === 0) throw new Error('cities.json not found');

    const citiesArr: City[] = JSON.parse(citiesFromFSJSON.toString()); 
  
    for (const city of citiesArr) {
      CityODM.create({
        id: city.id,
        name: city.name
      });
    }
  }

  const regions = await RegionODM.find();
  if (regions.length > 0) return;

  const regionsFromFSJSON = fs.readFileSync(path.join(__dirname, '../../data/regions.json'));
  if (regionsFromFSJSON.length === 0) throw new Error('regions.json not found');

  const regionsArr: Region[] = JSON.parse(regionsFromFSJSON.toString()); 

  for (const region of regionsArr) {
    RegionODM.create({
      id: region.id,
      name: region.name,
      cityId: region.cityId
    });
  }
}

export default {
  seedAdminAndBasicUser,
  seedLocations
}