
var bcrypt = require('bcryptjs');
const stschema =require('../model/schema.js')
 
module.exports.stcontroller = async(req,res)=>{
    // const student = await stschema();
    var salt = bcrypt.genSaltSync(10);
    let hashedpassword = await bcrypt.hash(req.body.password,salt);


        let studentData = await  stschema({
    
            sname : req.body.sname,
            email : req.body.email,
            password : hashedpassword,
            phone : req.body.phone,
            
    
        });
    
        let saveStudentData = await studentData.save();
        res.send(saveStudentData);


}


module.exports.getstcontroller = async(req,res)=>{
    let studentData = await stschema.find()
    res.send(studentData);
}

module.exports.deletestcontroller = async(req,res)=>{
    let studentData = await stschema.deleteOne({
        sname : req.body.sname,
    });
    res.send(studentData);
}
module.exports.updatestcontroller = async(req,res)=>{
    let studentData = await stschema.updateOne({ sname:req.params.sname},{$set:{sname:req.body.sname, email : req.body.email,
        password : req.body.password,
        phone : req.body.phone,}})
    // let studentData = await stschema.updateOne({ sname:req.params.sname},req.body)
    res.send(studentData);
}