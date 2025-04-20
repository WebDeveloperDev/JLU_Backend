const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String },
    dob: { type: Date },
    address: {
      street: String,
      city: String,
      state: String,
      pincode: String,
      country: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
