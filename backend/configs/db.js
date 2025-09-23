let mongoose = require ('mongoose');
require ('dotenv').config ();

let connectToDb = async () => {
  try {
    await mongoose.connect (process.env.MONGO_URL);
    console.log ('Connected to Db');
  } catch (error) {
    console.log ('Database connection error:', error.message);
  }
};

module.exports = connectToDb;
