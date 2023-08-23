const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  enroll: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cgpa: { type: String , required: true },
  elective1: { type: String, required: true },
  elective2: { type: String },
  elective3: { type: String },
});

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
