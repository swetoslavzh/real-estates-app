"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Contact_odm_1 = __importDefault(require("../data/models_odm/Contact.odm"));
function createContact(req, res) {
    var contact = req.body;
    if (!contact)
        return;
    contact.type = Number(contact.type);
    var date = new Date();
    contact.creationDate = date;
    Contact_odm_1.default.create(contact)
        .then(function (contact) {
        return res.status(200).json({
            success: true,
            message: 'contact created',
            contact: contact
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
function getAllContacts(req, res) {
    Contact_odm_1.default.find()
        .sort({ creationDate: 'descending' })
        .then(function (contacts) {
        return res.status(200).json(contacts);
    })
        .catch(function (err) {
        console.log(err);
        return res.status(404).json({
            success: false,
            message: err.message
        });
    });
}
function getContact(req, res) {
}
function deleteContact(req, res) {
}
function updateContact(req, res) {
}
exports.default = {
    createContact: createContact,
    getAllContacts: getAllContacts,
    getContact: getContact,
    deleteContact: deleteContact,
    updateContact: updateContact
};
//# sourceMappingURL=contact.controller.js.map