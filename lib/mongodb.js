const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGO_URI

if(!MONGODB_URI){
    throw new Error("please define the mongo url in env file")
}

let cached = global.mongoose;