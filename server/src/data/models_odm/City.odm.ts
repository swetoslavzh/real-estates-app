import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.Number,
    required: true,
    unique: true
  },
  name: {
    type: mongoose.Schema.Types.String,
    required: true
  }
});

const city = mongoose.model('City', citySchema);
export default city;
