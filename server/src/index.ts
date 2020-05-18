const env = process.env.NODE_ENV || 'development';
import config from './config/config';
import db from './config/database';
import express from 'express';
import expressConfig from './config/express';
const system = require('system-commands');
const configEnv = config[env];
const app = express();
const script = 'cd "C:\\Program Files\\MongoDB\\Server\\4.2\\bin" & mongod --dbpath "C:\\Users\\svetoslav.zhelyazkov\\Documents\\test4"';

db(configEnv);
expressConfig(app);

app.use(express.static('../public/dist/'));

system(script)
  .then((output: any) => {
    console.log(output)
  }).catch((error: any) => console.log(error));
  
app.listen(configEnv.port, () => console.log(`Listening on port ${configEnv.port}...`));