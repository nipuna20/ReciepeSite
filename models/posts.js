const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({

    //defining attribusted of schema in database
    topic:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    


     
    
});
//making a schema called post in db
module.exports = mongoose.model('Posts',postSchema);