const mongoose=require('mongoose');

const AllocationSchema = new mongoose.Schema({
    name:{type:String,required:true},
    enroll:{type:String,required:true},
    elective:{type:String,required:true},
});

AllocationModel = mongoose.model("Allocate",AllocationSchema);

module.exports=AllocationModel;