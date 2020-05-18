import PassportLocal from 'passport-local';
import User from '../models/User.model';
import encryption from '../utilities/encryption';

const PassportLocalStrategy = PassportLocal.Strategy;


export default new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const salt = encryption.generateSalt();
  const hashedPass = encryption.generateHashedPassword(salt, password);
  User.create({email, hashedPass, salt, name: req.body.name})
    .then(() => {
      return done(null)
    })
    .catch(() => {
      const error = "User with this email already exists";
      return done(error)
    });
});
