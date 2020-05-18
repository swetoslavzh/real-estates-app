import mongoose from 'mongoose';

const estateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: Object,
    required: true
  },
  region: {
    type: Object,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  floor: {
    type: Number
  },
  currency: {
    type: Number,
    rquired: true
  },
  type: {
    type: Number,
    required: true
  },
  picturesUrls: {
    type: [String],
    default: [String]
  },
  phoneNumber: {
    type: String,
    required: true
  },
  areaSq: {
    type: Number
  },
  constructionType: {
    type: Number
  },
  condition: {
    type: Number
  },
  status: {
    type: Number
  },
  sellerName: {
    type: String
  },
  estateCreationTime: {
    type: Date
  },
  features: {
    type: [Number]
  },
  additionalInfo: { 
    type: String
  },
  creationDate: {
    type: mongoose.Schema.Types.Date,
    required: true
  }
});

const estate = mongoose.model('Estate', estateSchema);
export default estate;
