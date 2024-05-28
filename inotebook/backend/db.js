// const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017";

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("Connected To Mongo Successfully ");
//     })
// }

// module.exports = connectToMongo;
// db.js

const mongoose = require('mongoose');

const connectToMongo = async () => {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/inotebook', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectToMongo;

