const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// GET all tags
router.get("/", async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: { model: Product, through: ProductTag },
    });
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Other routes (GET single tag, POST, PUT, DELETE) can be implemented in a similar manner

module.exports = router;
