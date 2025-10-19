const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGO_URI

if(!MONGODB_URI){
    throw new Error("please define the mongo url in env file")
}

let cached = global.mongoose;
if(!cached){
    cached = global.mongoose = {conn:null , Promise:null};
}
async function connectDB(){
  if(cached.conn){
    return cached.conn;
  }   
if(!cached.Promise){
    const opts = {
        bufferCommands : false,
    }
   
}
}