import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  city: {
    type: Object,
    required: true
  },
  type: {
    type: Number,
    required: true
  },
  region: {
    type: Object,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  additionalInfo: { 
    type: String
  },
  creationDate: {
    type: mongoose.Schema.Types.Date,
    required: true
  }
});

const contact = mongoose.model('Contact', contactSchema);
export default contact;
