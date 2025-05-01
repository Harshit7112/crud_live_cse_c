const mongoose=require('mongoose');
 const student=new mongoose.Schema({
    sid:{type:Number,required:true},
    name:{type:String, required:true},
    age:{type:Number, required:true}
 })

 const studentShema=mongoose.model("student",student);
 module.exports=studentShema;