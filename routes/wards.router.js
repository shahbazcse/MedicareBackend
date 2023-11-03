const express = require('express');
const router = express.Router();

const Wards = require('../models/ward.model');
const seedData = require('../db/dummyData');

// Get All Wards API
router.get('/', async (req, res) => {
  try {
    const wards = await getAllWards();
    if (wards.length === 0) {
      seedData(addWard, "wards");
    }
    res.status(200).json({ message: "Wards Found", wards });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

async function getAllWards() {
  try {
    const wards = await Wards.find();
    return wards;
  } catch (error) {
    throw error;
  }
}

// Add New Ward API
router.post('/', async (req, res) => {
  try {
    const wardData = req.body;
    const ward = await addWard(wardData);
    res.status(201).json({
      message: "Ward Created",
      ward,
    })
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
});

async function addWard(wardData) {
  try {
    const newWard = new Wards(wardData);
    const createdWard = await newWard.save();
    return createdWard;
  } catch (e) {
    throw e;
  }
}

// Update Existing Ward API
router.post('/:wardId', async (req, res) => {
  try {
    const { wardId } = req.params;
    const updatedData = req.body;
    const ward = await updateWard(wardId, updatedData);
    res.status(200).json({
      message: "Ward Updated",
      ward,
    })
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
})

async function updateWard(wardId, updatedData) {
  try {
    const ward = await Wards.findOne({ _id: wardId });
    if (!ward) {
      throw new Error("Ward Not Found");
    }
    const updatedWard = await Wards.findByIdAndUpdate(wardId, updatedData);
    return updatedWard;
  } catch (e) {
    throw e;
  }
}

// Delete Ward API
router.delete("/:wardId", async (req, res) => {
  try {
    const { wardId } = req.params;
    const ward = await deleteWard(wardId);
    res.status(200).json({
      message: "Ward Deleted",
    })
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
})

async function deleteWard(wardId) {
  try {
    const ward = Wards.findOne({ _id: wardId });
    if (!ward) {
      throw new Error("Ward Not Found");
    }
    await Wards.findByIdAndDelete(wardId);
  } catch (e) {
    throw e;
  }
}

module.exports = router;