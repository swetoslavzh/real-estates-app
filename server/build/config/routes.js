"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllers_1 = __importDefault(require("../controllers"));
var router = express_1.default.Router();
// Locations
router.get('/locations/cities', controllers_1.default.locations.getCities);
router.get('/locations/regions', controllers_1.default.locations.getRegions);
// Estates
router.get('/estates', controllers_1.default.estate.getAllEstates);
router.get('/estates/:id', controllers_1.default.estate.getEstate);
router.post('/estates/create', controllers_1.default.estate.createEstate);
router.put('/estates/:id', controllers_1.default.estate.updateEstate);
router.delete('/estates/:id', controllers_1.default.estate.deleteEstate);
// Contacts
router.get('/contacts', controllers_1.default.contact.getAllContacts);
router.get('/contacts/:id', controllers_1.default.contact.getContact);
router.post('/contacts/create', controllers_1.default.contact.createContact);
router.put('/contacts/:id', controllers_1.default.contact.updateContact);
router.delete('/contacts/:id', controllers_1.default.contact.deleteContact);
// Upload
router.post('/upload/:estateId', controllers_1.default.upload.uploadPicture);
exports.default = router;
//# sourceMappingURL=routes.js.map