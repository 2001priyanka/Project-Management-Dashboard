import mongoose from "mongoose";

const houseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      // required: true, // Indicates that the 'user' field is required
    },
    address: {
      type: String,
      required: true, // Indicates that the 'address' field is required
    },
    // media: {
    //   type: String,
    //   required: true, // Indicates that the 'media' field is required
    // },
    bathrooms: {
      type: Number,
      required: true, // Indicates that the 'bathrooms' field is required
    },
    bedrooms: {
      type: Number,
      required: true, // Indicates that the 'bedrooms' field is required
    },
    communityFeatures: {
      type: [String],
      required: true, // Indicates that the 'communityFeatures' field is required
    },
    price: {
      type: Number,
      default: 0,
    },
    squareFeet: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);


const House = mongoose.model("House", houseSchema);

export default House; // Changed to "House" to match the convention of capitalizing models
