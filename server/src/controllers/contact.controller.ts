import express from 'express';
import ContactODM  from '../data/models_odm/Contact.odm';
import { Contact } from '../data/models/contact.model';

function createContact(req: express.Request, res: express.Response): void {
  let contact: Contact = req.body;
  if (!contact) return;

  contact.type = Number(contact.type);
  const date = new Date();
  contact.creationDate = date;

  ContactODM.create(contact)
    .then(contact => {
      return res.status(200).json({
        success: true,
        message: 'contact created',
        contact: contact
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

function getAllContacts(req: express.Request, res: express.Response): void {
  ContactODM.find()
    .sort({ creationDate: 'descending'})
    .then(contacts => {
      return res.status(200).json(contacts)
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).json({
        success: false,
        message: err.message
      });
    });
}

function getContact(req: express.Request, res: express.Response): void {
  const contactId = req.params.id;

  ContactODM.findOne({ _id: contactId })
    .then(contact => res.json(contact))
    .catch((err) => {
      console.log(err);
      return res.status(404).json({
        success: false,
        message: err.message
      });
    });
}

function deleteContact(req: express.Request, res: express.Response): void {
  const contactId = req.params.id;
  if (!contactId) return;

  ContactODM.findOneAndDelete({ _id: contactId })
    .then((_data) => {
      return res.status(200).json({
        success: true,
        message: 'Contact was successfuly deleted'
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

function updateContact(req: express.Request, res: express.Response): void {

}

export default {
  createContact,
  getAllContacts,
  getContact,
  deleteContact,
  updateContact
}