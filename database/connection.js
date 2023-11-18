const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect("mongodb+srv://danish:1234567890@cluster0.hde1hvc.mongodb.net/validation", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};

module.exports = db;
