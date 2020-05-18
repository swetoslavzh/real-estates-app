import express, { Router } from 'express';
import controllers from '../controllers';

const router: Router = express.Router();

// Locations
router.get('/locations/cities', controllers.locations.getCities);
router.get('/locations/regions', controllers.locations.getRegions);

// Estates
router.get('/estates', controllers.estate.getAllEstates);
router.get('/estates/:id', controllers.estate.getEstate);
router.post('/estates/create', controllers.estate.createEstate);
router.put('/estates/:id', controllers.estate.updateEstate);
router.delete('/estates/:id', controllers.estate.deleteEstate);

// Contacts
router.get('/contacts', controllers.contact.getAllContacts);
router.get('/contacts/:id', controllers.contact.getContact);
router.post('/contacts/create', controllers.contact.createContact);
router.put('/contacts/:id', controllers.contact.updateContact);
router.delete('/contacts/:id', controllers.contact.deleteContact);

// Upload
router.post('/upload/:estateId', controllers.upload.uploadPicture);

export default router;