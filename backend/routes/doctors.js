const express = require("express");
const doctors = require("../models/doctors");
const Doctors = require("../models/doctors");

const router = express.Router();

//add doctors

router.post("/doctor/add", (req, res) => {
  let newDoctor = new Doctors(req.body);

  newDoctor.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Doctor Added successfully",
    });
  });
});

//get doctors

router.get("/doctors/get", (req, res) => {
  Doctors.find().exec((err, doctors) => {
    if (err) {
      return res.status(400).json({});
    }

    return res.status(200).json({
      success: true,
      existingDoctors: doctors,
    });
  });
});

//update doctor

router.put("/doctor/update/:id", (req, res) => {
  Doctors.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, doctor) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      return res.status(200).json({
        success: "Updated successfully",
      });
    }
  );
});

//delete doctor

router.delete("/doctor/delete/:id", (req, res) => {
  Doctors.findByIdAndRemove(req.params.id).exec((err, deletedDoctor) => {
    if (err)
      return res.status(400).json({
        message: "Delete unsuccessful",
        err,
      });

    return res.json({
      message: "Delete successfull",
      deletedDoctor,
    });
  });
});

//get a specific doctor

router.get("/doctor/:id", (req, res) => {
  let doctorId = req.params.id;

  Doctors.findById(doctorId, (err, doctors) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err,
      });
    }
    return res.status(200).json({
      success: true,
      doctors,
    });
  });
});

module.exports = router;
