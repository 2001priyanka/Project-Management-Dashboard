import asyncHandler from "express-async-handler";

import House from "../models/houseModel.js";

// @desc    Fetch all house
// @route   GET /api/houses
// @access  public
const getHouses = asyncHandler(async (req, res) => {
  try {
    const houses = await House.find({}); // Modify the query as needed
    res.status(200).json(houses);
  } catch (error) {
    console.error("Error fetching houses:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// @desc    Fetch all single house
// @route   GET /api/houses/:id
// @access  public

const getHouseById = () => {
  try {
    const house = House.findById(req.param.id);
    if (house) {
      res.json(house);
    } else {
      res.status(404).json({ message: "house not found" });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "something went wrong" });
  }
};

// @desc    Fetch all single house
// @route   post /api/houses
// @access  public

const createHouse = asyncHandler(async (req, res) => {
  try {
    const { address, price, bathrooms, bedrooms, squareFeet } = req.body;
    if (
      !address ||
      typeof address !== "string" ||
      isNaN(price) ||
      isNaN(bathrooms) ||
      isNaN(bedrooms) ||
      isNaN(squareFeet)
    ) {
      res.status(400).json({ message: "Invalid input data" });
      return; // Return to avoid the rest of the code execution
    }
    const houses = await House.create({
      address,
      price,
      bathrooms,
      bedrooms,
      squareFeet,
      // user_id: req.user._id,
    });
    res.status(201).json(houses);
    console.log("house Created:", houses);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "internal server error" });
  }
});

export { getHouses, getHouseById, createHouse };
