import * as crypto from 'crypto';

export default {
  generateSalt: () =>
    crypto.randomBytes(128).toString('base64'),
  generateHashedPassword: (salt: string, password: string) =>
    crypto.createHmac('sha256', salt).update(password).digest('hex')
};