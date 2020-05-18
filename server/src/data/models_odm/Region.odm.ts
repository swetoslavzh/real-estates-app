import mongoose from 'mongoose';

const regionSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.Number,
    required: true,
    unique: true
  },
  name: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  cityId: {
    type: mongoose.Schema.Types.Number,
    required: true
  }
});

const region = mongoose.model('Region', regionSchema);
export default region;
