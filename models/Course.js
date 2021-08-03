const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    id:{
         type: String,
    required: true,
    unique: true,
    },
  title: {
    type: String,
    required: true,
    
  },
  thumbnailURL: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: false,
  },

  videoLink: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("Course", CourseSchema);
