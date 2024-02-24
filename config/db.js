require('dotenv').config();
const mongoose = require('mongoose');



const connectDB = async () =>{
    try{
        mongoose.connect(process.env.DATABASE_URL);
        console.log('MongooDB connected...');
    }
    catch(err){
        console.error(err.message);
        process.exit(1);

    }
}

module.exports = connectDB;
