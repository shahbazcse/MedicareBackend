const express = require('express');
const router = express.Router();

const Patients = require('../models/patient.model');
const seedData = require('../db/dummyData');

// Get All Patients API
router.get('/', async (req, res) => {
  try {
    const patients = await getAllPatients();
    if(patients.length === 0){
      seedData(addPatient, "patients");
    }
    res.status(200).json({ message: "Found Patients", patients });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

async function getAllPatients(){
  try {
    const patients = await Patients.find();
    return patients;
  } catch (error) {
    throw error;
  }
}

// Add New Patient API
router.post('/', async (req, res) => {
  try {
    const patientData = req.body;
    const patient = await addPatient(patientData);
    res.status(201).json({ message: "Patient Created", patient });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

async function addPatient(patientData){
  try {
    const newPatient = new Patients(patientData);
    const createdPatient = await newPatient.save();
    return createdPatient;
  } catch (error) {
    throw error;
  }
}

// Update Existing Patient API
router.post('/:patientId', async (req, res) => {
  try{
    const { patientId } = req.params;
    const updatedData = req.body;
    const patient = await updatePatient(patientId, updatedData);
    res.status(200).json({
      message: "Patient Updated",
      patient,
    })
  }catch(e){
    res.status(500).json({
      error: e.message,
    });
  }
})

async function updatePatient(patientId, updatedData){
  try{
    const patient = await Patients.findOne({ _id: patientId });
    if(!patient){
      throw new Error("Patient Not Found");
    }
    const updatedPatient = await Patients.findByIdAndUpdate(patientId, updatedData);
    return updatedPatient;
  }catch(e){
    throw e;
  }
}

// Delete Patient API
router.delete("/:patientId", async (req, res) => {
  try{
    const { patientId } = req.params;
    const patient = await deletePatient(patientId);
    res.status(200).json({
      message: "Patient Deleted",
    })
  }catch(e){
    res.status(500).json({
      error: e.message,
    });
  }
})

async function deletePatient(patientId){
  try{
    const patient = Patients.findOne({ _id: patientId });
    if(!patient){
      throw new Error("Student Not Found");
    }
    await Patients.findByIdAndDelete(patientId);
  }catch(e){
    throw e;
  }
}

module.exports = router;