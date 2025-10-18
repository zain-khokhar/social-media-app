const { TypeIcon } = require('lucide-react');
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        typeof: string,
        required:true,
    },
    url:{
        typeof: string,
        required:true,
        
    }
})