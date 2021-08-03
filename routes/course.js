const router = require("express").Router();
const Course = require("../models/Course");


router.get("/", async (req, res) => {
  try {
    const data = await Course.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  
  try {
    const newPost = await Course.findById(req.params.id);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
