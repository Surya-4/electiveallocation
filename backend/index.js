const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Student = require("./models/Student");
const Allocate = require("./models/Allocate");
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

const admin = "Surya";
const Password = "2020itb036";

let e1 = 5;
let e2 = 5;
let e3 = 5;

mongoose.connect(
  "mongodb+srv://suryavamsi04:1pcIOYHhH6EJka2x@cluster0.wn7na3a.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/data", async (req, res) => {
  const { name, enroll, mobile, email, cgpa, elective1, elective2, elective3 } =
    req.body;
  const check = await Student.find({ enroll: enroll });
  try {
    if(check.length>0)
    {
      return res.send('Already Filled');
    }
    const doc = await Student.create({
      name,
      enroll,
      mobile,
      email,
      cgpa,
      elective1,
      elective2,
      elective3,
    });
    res.json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/admin", async (req, res) => {
  try {
    const { name, password } = req.body;
    if (name !== admin || password !== Password) {
      return res.status(400).json("Incorrect Credentials");
    }
    res.send({ name, password });
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/allocate", async (req, res) => {
  const allocate = req.body;
  if (!allocate) {
    return res.status(400).json("Unexpected Error");
  }
  const studdata = await Student.find().sort({ cgpa: -1 });
  const alloc = [];
  let count = 0;
  studdata.map(async (item) => {
    const enroll = item.enroll;
    const name = item.name;
    const elective1 = item.elective1;
    const elective2 = item.elective2;
    const elective3 = item.elective3;
    let elective;
    if (elective1 === "elective 1" && e1 > 0) {
      e1 -= 1;
      elective = "elective 1";
    } else if (elective1 === "elective 2" && e2 > 0) {
      e2 -= 1;
      elective = "elective 2";
    } else if (elective1 === "elective 3" && e3 > 0) {
      e3 -= 1;
      elective = "elective 3";
    } else if (elective2 === "elective 1" && e1 > 0) {
      e1 -= 1;
      elective = "elective 1";
    } else if (elective2 === "elective 2" && e2 > 0) {
      e2 -= 1;
      elective = "elective 2";
    } else if (elective2 === "elective 3" && e3 > 0) {
      e3 -= 1;
      elective = "elective 3";
    } else if (elective3 === "elective 1" && e1 > 0) {
      e1 -= 1;
      elective = "elective 1";
    } else if (elective3 === "elective 2" && e2 > 0) {
      e2 -= 1;
      elective = "elective 2";
    } else if (elective3 === "elective 3" && e3 > 0) {
      e3 -= 1;
      elective = "elective 3";
    }
    const doc = await Allocate.create({
      name: name,
      enroll: enroll,
      elective: elective,
    });
    count++;
    console.log(doc);
    alloc.push(doc);
    if (count === studdata.length) return res.send(alloc);
  });
});
//1pcIOYHhH6EJka2x
app.listen(4000);
//mongodb+srv://suryavamsi04:<password>@cluster0.wn7na3a.mongodb.net/?retryWrites=true&w=majority
