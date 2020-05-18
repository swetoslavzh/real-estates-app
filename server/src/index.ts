const env = process.env.NODE_ENV || 'development';
import config from './config/config';
import db from './config/database';
import express from 'express';
import expressConfig from './config/express';

const configEnv = config[env];
const app = express();
db(configEnv);
expressConfig(app);

app.listen(configEnv.port, () => console.log(`Listening on port ${configEnv.port}...`));