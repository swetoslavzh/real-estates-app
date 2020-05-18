import jwt from 'jsonwebtoken';
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
  const user = {
    email: email.trim(),
    password: password.trim()
  }

  User.findOne({email: user.email}).then((savedUser) => {
    if (!savedUser) {
      const error = new Error('Incorrect email or password')
      error.name = 'IncorrectCredentialsError'

      return done(error)
    }

    const isMatch = savedUser.hashedPass === encryption.generateHashedPassword(savedUser.salt, password);

    if (!isMatch) {
      const error = new Error('Incorrect email or password')
      error.name = 'IncorrectCredentialsError'

      return done(error)
    }

    const payload = {
      sub: savedUser.id
    }

    // create a token string
    const token = jwt.sign(payload, 'R3a7 3st4te5 SZH');
    const isAdmin = savedUser.roles.indexOf('Admin') !== -1;

    const data = {
      name: savedUser.name,
      id: savedUser._id,
      isAdmin
    }

    return done(null, token, data)
  })
})
