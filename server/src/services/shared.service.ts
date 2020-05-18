import jwt from 'jsonwebtoken';

const getId = (token) => {
  if (typeof token === "undefined") {
    return 'token is undefined';
  }
  const decoded = jwt.decode(token, {complete: true});
  return decoded.payload.sub;
}

export default {
  getId
}