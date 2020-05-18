import mongoose from 'mongoose';
import encryption from '../../utilities/encryption';

const userSchema = new mongoose.Schema({
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true
  },
  hashedPass: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  name: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  salt: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  roles: [{
    type: mongoose.Schema.Types.String
  }]
});

userSchema.method({
  authenticate: function (password: string) { 
    return encryption.generateHashedPassword(this.salt, password) === this.hashedPass
  }
});

const User = mongoose.model('User', userSchema);
export default User;
