import mongoose from 'mongoose';
import seedDataService from '../services/seed-data.service';

export default (config: any) => {
    mongoose.connect(config.path, { 
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
     });
    const db = mongoose.connection;

    db.once('open', err => {
        if (err) throw err;
        Promise.all([ 
          seedDataService.seedAdminAndBasicUser(),
          seedDataService.seedLocations()
        ])
          .then(() => {
            console.log('MongoDB ready!');
          }).catch((err) => {
            console.log('Something went wrong with mongodb');
            console.error(err);
          });
    });
    
    db.on('error', err => console.log(`Database error: ${err}`));
}