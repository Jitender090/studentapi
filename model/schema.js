const mongoose = require('mongoose');

    const schema= new mongoose.Schema({
        sname: { type: String, required: true },
        email:{type :String ,required:true, unique:true},
        password:{type :String ,required:true},
        phone:{type:Number, required:true, unique:true}

    });
    const stmodel=  mongoose.model('students',schema);
    stmodel.createIndexes();
 

module.exports = stmodel;
