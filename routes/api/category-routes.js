const router = require("express").Router();
const { Category, Product } = require("../../models");

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Other routes (POST, PUT, DELETE) can be implemented in a similar manner

module.exports = router;
