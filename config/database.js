const mongoose= require('mongoose');
async  function database(){
    await mongoose.connect('mongodb://0.0.0.0:27017/studentlogin');
    console.log("Database Connected");

}
module.exports = database;